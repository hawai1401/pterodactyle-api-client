import type { BaseArgs } from "../index.js";
import HttpClient from "../httpClient.js";

export namespace MethodArgs {
  export interface EditAcount extends BaseArgs {
    password: string;
  }

  export interface EnableA2f extends EditAcount {
    code: string;
  }

  export interface EditEmail extends EditAcount {
    email: string;
  }

  export interface EditPassword extends BaseArgs {
    current_password: string;
    password: string;
    password_confirmation: string;
  }

  export interface CreateApiKey extends BaseArgs {
    description: string;
    allowed_ips?: IP[] | undefined;
  }

  export interface DeleteApiKey extends BaseArgs {
    identifier: string;
  }

  export interface CreateSshKey extends BaseArgs {
    name: string;
    public_key: string;
  }

  export interface DeleteSshKey extends BaseArgs {
    fingerprint: string;
  }
}

export namespace ReturnValue {
  export interface user {
    object: "user";
    attributes: {
      id: number;
      admin: boolean;
      username: string;
      email: string;
      first_name: string;
      last_name: string;
      language: string;
    };
  }

  export interface A2FData {
    data: {
      image_url_data: string;
      secret: string;
    };
  }

  export interface RecoveryTokens {
    object: "recovery_tokens";
    attributes: {
      tokens: [string, string, string, string, string, string, string, string];
    };
  }

  export type ApiKeysParsed = {
    object: "list";
    data: ApiKey<Date>[];
  };

  export interface ReturnedApiKey extends CreatedApiKey {
    api_key: string;
  }

  export interface UserActivityList<T extends UserEvent | AuthEvent> {
    object: "list";
    data: UserActivityEvent<T>[];
  }

  export type SshKeysParsed = {
    object: "list";
    data: SshKey<Date>[];
  };

  export interface UserActivityEvent<
    T extends UserEvent | AuthEvent = UserEvent | AuthEvent,
  > {
    object: "activity_log";
    attributes: {
      id: string;
      batch: null;
      event: T;
      is_api: boolean;
      ip: IP;
      description: null;
      properties: {
        identifier: T extends "user:api-key.create"
          ? string
          : T extends "user:api-key.delete"
            ? string
            : undefined;
        fingerprint: T extends "user:ssh-key.create"
          ? string
          : T extends "user:ssh-key.delete"
            ? string
            : undefined;
        old: T extends "user:email-changed" ? string : undefined;
        new: T extends "user:email-changed" ? string : undefined;
      };
      has_additional_metadata: boolean;
      timestamp: string;
    };
  }
}

export type IP = `${number}.${number}.${number}.${number}`;

export type UserEvent =
  | "user:api-key.create"
  | "user:api-key.delete"
  | "user:ssh-key.create"
  | "user:ssh-key.delete"
  | "user:account.email-changed"
  | "user:account.password-changed"
  | "user:two-factor.create"
  | "user:two-factor.delete";

export type AuthEvent = "auth:success" | "auth:fail" | "auth:checkpoint";

interface ApiKey<L, C = L> {
  object: "api_key";
  attributes: {
    identifier: string;
    description: string;
    allowed_ips: string[];
    last_used_at: L;
    created_at: C;
  };
}

type ApiKeysRaw = {
  object: "list";
  data: ApiKey<string>[];
};

interface CreatedApiKey extends ApiKey<null, string> {
  meta: {
    secret_token: string;
  };
}

interface SshKey<T> {
  object: "ssh_key";
  attributes: {
    name: string;
    fingerprint: string;
    public_key: string;
    created_at: T;
  };
}

type SshKeysRaw = {
  object: "list";
  data: SshKey<string>[];
};

export default class Account {
  constructor(private httpClient: HttpClient) {}

  info(): Promise<ReturnValue.user> {
    return this.httpClient.request<ReturnValue.user>("GET", "/client/account");
  }

  getA2fQrCode(): Promise<ReturnValue.A2FData> {
    return this.httpClient.request<ReturnValue.A2FData>(
      "GET",
      "/client/account/two-factor",
    );
  }

  enableA2f({ password, code }: MethodArgs.EnableA2f): Promise<ReturnValue.RecoveryTokens> {
    return this.httpClient.request<ReturnValue.RecoveryTokens, MethodArgs.EnableA2f>(
      "POST",
      "/client/account/two-factor",
      { password, code },
    );
  }

  disabledA2f({ password }: MethodArgs.EditAcount): Promise<void> {
    return this.httpClient.request<void, MethodArgs.EditAcount>(
      "POST",
      "/client/account/two-factor/disable",
      { password },
    );
  }

  editEmail({ email, password }: MethodArgs.EditEmail): Promise<void> {
    return this.httpClient.request<void, MethodArgs.EditEmail>(
      "PUT",
      "/client/account/email",
      { email, password },
    );
  }

  editPassword({
    current_password,
    password,
    password_confirmation,
  }: MethodArgs.EditPassword): Promise<void> {
    return this.httpClient.request<void, MethodArgs.EditPassword>(
      "PUT",
      "/client/account/password",
      {
        current_password,
        password,
        password_confirmation,
      },
    );
  }

  async listApiKeys(): Promise<ReturnValue.ApiKeysParsed> {
    const res = await this.httpClient.request<ApiKeysRaw>(
      "GET",
      "/client/account/api-keys",
    );
    return {
      ...res,
      data: res.data.map((apiKey) => ({
        ...apiKey,
        attributes: {
          ...apiKey.attributes,
          last_used_at: new Date(apiKey.attributes.last_used_at),
          created_at: new Date(apiKey.attributes.created_at),
        },
      })),
    };
  }

  async createApiKey({
    description,
    allowed_ips,
  }: MethodArgs.CreateApiKey): Promise<ReturnValue.ReturnedApiKey> {
    const res = await this.httpClient.request<
      CreatedApiKey,
      MethodArgs.CreateApiKey
    >("POST", "/client/account/api-keys", {
      description,
      allowed_ips,
    });
    return {
      ...res,
      api_key: `${res.attributes.identifier}${res.meta.secret_token}`,
    };
  }

  deleteApiKey({ identifier }: MethodArgs.DeleteApiKey): Promise<void> {
    return this.httpClient.request<void>(
      "DELETE",
      `/client/account/api-keys/${identifier}`,
    );
  }

  listActivity<T extends UserEvent | AuthEvent>({
    page,
    per_page,
    event,
  }: {
    page?: number | undefined;
    per_page?: number | undefined;
    event?: T | undefined;
  }): Promise<ReturnValue.UserActivityList<T>> {
    return this.httpClient.request<ReturnValue.UserActivityList<T>>(
      "GET",
      `/client/account/activity?page=${page ?? 1}&per_page=${per_page ?? 50}${event ? `&filter[event]=${event}` : ""}`,
    );
  }

  async listSshKeys(): Promise<ReturnValue.SshKeysParsed> {
    const res = await this.httpClient.request<SshKeysRaw>(
      "GET",
      "/client/account/ssh-keys",
    );
    return {
      ...res,
      data: res.data.map((sshKey) => ({
        ...sshKey,
        attributes: {
          ...sshKey.attributes,
          created_at: new Date(sshKey.attributes.created_at),
        },
      })),
    };
  }

  async createSshKey({
    name,
    public_key,
  }: MethodArgs.CreateSshKey): Promise<SshKey<Date>> {
    const res = await this.httpClient.request<
      SshKey<string>,
      MethodArgs.CreateSshKey
    >("POST", "/client/account/ssh-keys", {
      name,
      public_key,
    });
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
      },
    };
  }

  deleteSshKey({ fingerprint }: MethodArgs.DeleteSshKey): Promise<void> {
    return this.httpClient.request<void, MethodArgs.DeleteSshKey>(
      "DELETE",
      `/client/account/api-keys/remove`,
      { fingerprint },
    );
  }
}

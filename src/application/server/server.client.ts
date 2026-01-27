import type HttpClient from "../../class/HttpClient.js";
import type {
  UserServer,
  UserServerAttributesWithDate,
} from "../../client/server/server.types.js";
import DatabaseClient from "./database/database.client.js";
import type {
  ApplicationServerList,
  CreateServerArgs,
  EditApplicationServerArgs,
  EditApplicationServerConfigurationArgs,
  EditApplicationServerDetailsArgs,
  EditApplicationServerStartupArgs,
} from "./server.types.js";

export default class ServerClient {
  public database: DatabaseClient;

  constructor(private httpClient: HttpClient) {
    this.database = new DatabaseClient(httpClient);
  }

  async list() {
    const res = await this.httpClient.request<ApplicationServerList>(
      "GET",
      "/application/servers",
    );
    return {
      ...res,
      data: res.data.map((server) => ({
        ...server,
        created_at: new Date(server.created_at),
        updated_at: new Date(server.updated_at),
      })),
    };
  }

  async info({
    id,
    external_id,
  }: {
    id?: number | undefined;
    external_id?: number | undefined;
  }) {
    if (id) {
      const res = await this.httpClient.request<
        UserServer<UserServerAttributesWithDate<string>>
      >("GET", `/application/servers/${id}`);
      return {
        ...res,
        attributes: {
          ...res.attributes,
          created_at: new Date(res.attributes.created_at),
          updated_at: new Date(res.attributes.updated_at),
        },
      };
    } else if (external_id) {
      const res = await this.httpClient.request<
        UserServer<UserServerAttributesWithDate<string>>
      >("GET", `/application/servers/external/${external_id}`);
      return {
        ...res,
        attributes: {
          ...res.attributes,
          created_at: new Date(res.attributes.created_at),
          updated_at: new Date(res.attributes.updated_at),
        },
      };
    } else
      throw new Error(
        "Vous devez spécifier au moins un des 2 paramètres de recherche d'un utilisateur !",
      );
  }

  async create(options: CreateServerArgs) {
    const res = await this.httpClient.request<
      UserServer<UserServerAttributesWithDate<string>>,
      CreateServerArgs
    >("POST", `/application/servers`, options);
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }

  async edit(
    server: number,
    { details, configuration, startup }: EditApplicationServerArgs,
  ) {
    const basePath = `/application/servers/${server}`;
    const requests: Promise<
      UserServer<UserServerAttributesWithDate<string>>
    >[] = [];
    if (details)
      requests.push(
        this.httpClient.request<
          UserServer<UserServerAttributesWithDate<string>>,
          EditApplicationServerDetailsArgs
        >("PATCH", `${basePath}/details`, details),
      );
    if (configuration)
      requests.push(
        this.httpClient.request<
          UserServer<UserServerAttributesWithDate<string>>,
          EditApplicationServerConfigurationArgs
        >("PATCH", `${basePath}/build`, configuration),
      );
    if (startup)
      requests.push(
        this.httpClient.request<
          UserServer<UserServerAttributesWithDate<string>>,
          EditApplicationServerStartupArgs
        >("PATCH", `${basePath}/startup`, startup),
      );

    if (requests.length === 0)
      throw new Error("Aucunes modifications spécifiées !");

    const res = await Promise.all(requests);

    return {
      ...res[0]!,
      attributes: {
        ...res[0]!.attributes,
        created_at: new Date(res[0]!.attributes.created_at),
        updated_at: new Date(res[0]!.attributes.updated_at),
      },
    };
  }

  suspend(id: number) {
    return this.httpClient.request<
      UserServer<UserServerAttributesWithDate<string>>
    >("POST", `/application/servers/${id}/suspend`);
  }

  unsuspend(id: number) {
    return this.httpClient.request<
      UserServer<UserServerAttributesWithDate<string>>
    >("POST", `/application/servers/${id}/unsuspend`);
  }

  reinstall(id: number) {
    return this.httpClient.request<
      UserServer<UserServerAttributesWithDate<string>>
    >("POST", `/application/servers/${id}/reinstall`);
  }

  delete(id: number, force?: boolean | undefined) {
    return this.httpClient.request<
      UserServer<UserServerAttributesWithDate<string>>
    >("DELETE", `/application/servers/${id}${force ? "?force=true" : ""}`);
  }
}

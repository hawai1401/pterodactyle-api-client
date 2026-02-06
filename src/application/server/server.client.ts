import z from "zod";
import type HttpClient from "../../class/HttpClient.js";
import type {
  UserServer,
  UserServerAttributesWithDate,
} from "../../client/server/server.types.js";
import DatabaseClient from "./database/database.client.js";
import {
  applicationServerExternalId,
  applicationServerId,
  createApplicationDatabaseSchema,
  createServerSchema,
  editApplicationServerConfigurationSchema,
  editApplicationServerDetailsSchema,
  editApplicationServerStartupSchema,
} from "./server.schemas.js";
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
      >("GET", `/application/servers/${applicationServerId.parse(id)}`);
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
      >(
        "GET",
        `/application/servers/external/${applicationServerExternalId.parse(external_id)}`,
      );
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
        "Vous devez spécifier au moins un des 2 paramètres de recherche d'un serveur !",
      );
  }

  async create(options: CreateServerArgs) {
    const res = await this.httpClient.request<
      UserServer<UserServerAttributesWithDate<string>>,
      z.infer<typeof createServerSchema>
    >("POST", `/application/servers`, createServerSchema.parse(options));
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
    const basePath = `/application/servers/${applicationServerId.parse(server)}`;
    const requests: Promise<
      UserServer<UserServerAttributesWithDate<string>>
    >[] = [];
    if (details)
      requests.push(
        this.httpClient.request<
          UserServer<UserServerAttributesWithDate<string>>,
          z.infer<typeof editApplicationServerDetailsSchema>
        >(
          "PATCH",
          `${basePath}/details`,
          editApplicationServerDetailsSchema.parse(details),
        ),
      );
    if (configuration)
      requests.push(
        this.httpClient.request<
          UserServer<UserServerAttributesWithDate<string>>,
          z.infer<typeof editApplicationServerConfigurationSchema>
        >(
          "PATCH",
          `${basePath}/build`,
          editApplicationServerConfigurationSchema.parse(configuration),
        ),
      );
    if (startup)
      requests.push(
        this.httpClient.request<
          UserServer<UserServerAttributesWithDate<string>>,
          z.infer<typeof editApplicationServerStartupSchema>
        >(
          "PATCH",
          `${basePath}/startup`,
          editApplicationServerStartupSchema.parse(startup),
        ),
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
    >("POST", `/application/servers/${applicationServerId.parse(id)}/suspend`);
  }

  unsuspend(id: number) {
    return this.httpClient.request<
      UserServer<UserServerAttributesWithDate<string>>
    >(
      "POST",
      `/application/servers/${applicationServerId.parse(id)}/unsuspend`,
    );
  }

  reinstall(id: number) {
    return this.httpClient.request<
      UserServer<UserServerAttributesWithDate<string>>
    >(
      "POST",
      `/application/servers/${applicationServerId.parse(id)}/reinstall`,
    );
  }

  delete(id: number, force?: boolean | undefined) {
    return this.httpClient.request<
      UserServer<UserServerAttributesWithDate<string>>
    >(
      "DELETE",
      `/application/servers/${applicationServerId.parse(id)}${force ? "?force=true" : ""}`,
    );
  }
}

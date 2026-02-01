import type HttpClient from "../../../class/HttpClient.js";
import type {
  ApplicationDatabase,
  ApplicationDatabaseList,
  CreateApplicationDatabase,
  CreatedApplicationDatabase,
} from "./database.types.js";
import PasswordClient from "./password/password.client.js";

export default class DatabaseClient {
  public password: PasswordClient;

  constructor(private httpClient: HttpClient) {
    this.password = new PasswordClient(httpClient);
  }

  async list(server: number) {
    const res = await this.httpClient.request<ApplicationDatabaseList>(
      "GET",
      `/application/servers/${server}/databases`,
    );
    return {
      ...res,
      data: res.data.map((db) => ({
        ...db,
        attributes: {
          ...db.attributes,
          created_at: new Date(db.attributes.created_at),
          updated_at: new Date(db.attributes.updated_at),
        },
      })),
    };
  }

  async info(server: number, database: number) {
    const res = await this.httpClient.request<ApplicationDatabase<string>>(
      "GET",
      `/application/servers/${server}/databases/${database}`,
    );
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }

  async create(server: number, args: CreateApplicationDatabase) {
    const res = await this.httpClient.request<
      CreatedApplicationDatabase,
      CreateApplicationDatabase
    >("POST", `/application/servers/${server}/databases`, args);
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }

  delete(server: number, database: number) {
    return this.httpClient.request<void>(
      "DELETE",
      `/application/servers/${server}/databases/${database}`,
    );
  }
}

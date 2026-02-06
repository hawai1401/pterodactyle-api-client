import type HttpClient from "../../../../class/HttpClient.js";
import {
  applicationServerDatabaseId,
  applicationServerId,
} from "../../server.schemas.js";

export default class PasswordClient {
  constructor(private httpClient: HttpClient) {}

  reset(server: number, database: number) {
    return this.httpClient.request<void>(
      "POST",
      `/application/servers/${applicationServerId.parse(server)}/databases/${applicationServerDatabaseId.parse(database)}/reset-password`,
    );
  }
}

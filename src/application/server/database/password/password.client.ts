import type HttpClient from "../../../../class/HttpClient.js";

export default class PasswordClient {
  constructor(private httpClient: HttpClient) {}

  reset(server: number, database: number) {
    return this.httpClient.request<void>(
      "POST",
      `/application/servers/${server}/databases/${database}/reset-password`,
    );
  }
}

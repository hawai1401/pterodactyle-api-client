import type HttpClient from "../../../../class/HttpClient.js";

export default class LockClient {
  constructor(private httpClient: HttpClient) {}

  toggle(id: string, backup: string) {
    return this.httpClient.request<void>(
      "POST",
      `/client/servers/${id}/backups/${backup}/lock`,
    );
  }
}

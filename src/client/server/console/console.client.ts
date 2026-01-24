import type HttpClient from "../../../class/HttpClient.js";
import type { SendConsoleCommandArgs } from "./console.types.js";
import WebsocketClient from "./websocket/websocket.console.client.js";

export default class ConsoleClient {
  public websocket: WebsocketClient;

  constructor(
    private httpClient: HttpClient,
    readonly panelUrl: URL,
  ) {
    this.websocket = new WebsocketClient(httpClient, panelUrl);
  }

  send(id: string, { command }: SendConsoleCommandArgs) {
    return this.httpClient.request<void, SendConsoleCommandArgs>(
      "PUT",
      `/client/servers/${id}/settings/docker-image`,
      { command },
    );
  }
}

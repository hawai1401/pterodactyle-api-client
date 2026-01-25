import WebsocketClient from "./websocket/websocket.console.client.js";
export default class ConsoleClient {
    httpClient;
    panelUrl;
    websocket;
    constructor(httpClient, panelUrl) {
        this.httpClient = httpClient;
        this.panelUrl = panelUrl;
        this.websocket = new WebsocketClient(httpClient, panelUrl);
    }
    send(id, { command }) {
        return this.httpClient.request("PUT", `/client/servers/${id}/settings/docker-image`, { command });
    }
}

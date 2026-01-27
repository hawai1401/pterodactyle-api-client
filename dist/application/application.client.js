import HttpClient from "../class/HttpClient.js";
import ServerClient from "./server/server.client.js";
import UserClient from "./user/user.client.js";
export default class ApplicationAPI {
    httpClient;
    panelUrl;
    user;
    server;
    constructor({ apiKey, panelUrl }) {
        this.panelUrl = panelUrl;
        this.httpClient = new HttpClient(panelUrl, apiKey);
        this.user = new UserClient(this.httpClient);
        this.server = new ServerClient(this.httpClient);
    }
}

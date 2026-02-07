import HttpClient from "../class/HttpClient.js";
import { Account } from "./account/index.js";
import { Server, serverListSchema, } from "./server/index.js";
export default class ClientAPI {
    httpClient;
    panelUrl;
    account;
    constructor({ apiKey, panelUrl }) {
        this.panelUrl = panelUrl;
        this.httpClient = new HttpClient(panelUrl, apiKey);
        this.account = new Account(this.httpClient);
    }
    servers(options) {
        const parsedValues = serverListSchema.parse(options);
        return this.httpClient.request("GET", `/client?page=${parsedValues?.page ?? 1}&per_page=${parsedValues?.per_page ?? 50}`);
    }
    server(id) {
        return new Server(this.httpClient, this.panelUrl, id);
    }
}

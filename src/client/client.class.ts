import HttpClient from "../class/HttpClient.js";
import { Account } from "./account/index.js";
import { Server } from "./server/index.js";

export default class ClientAPI {
  private httpClient: HttpClient;
  readonly panelUrl: URL;
  public account: Account;
  public server: Server;

  constructor({ apiKey, panelUrl }: { apiKey: string; panelUrl: URL }) {
    this.panelUrl = panelUrl;
    this.httpClient = new HttpClient(panelUrl, apiKey);
    this.account = new Account(this.httpClient);
    this.server = new Server(this.httpClient, panelUrl);
  }
}

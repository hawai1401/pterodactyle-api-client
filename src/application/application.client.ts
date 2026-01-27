import HttpClient from "../class/HttpClient.js";
import ServerClient from "./server/server.client.js";
import UserClient from "./user/user.client.js";

export default class ApplicationAPI {
  private httpClient: HttpClient;
  readonly panelUrl: URL;
  public user: UserClient;
  public server: ServerClient;

  constructor({ apiKey, panelUrl }: { apiKey: string; panelUrl: URL }) {
    this.panelUrl = panelUrl;
    this.httpClient = new HttpClient(panelUrl, apiKey);
    this.user = new UserClient(this.httpClient);
    this.server = new ServerClient(this.httpClient);
  }
}

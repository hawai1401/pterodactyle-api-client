import HttpClient from "../class/HttpClient.js";
import { Account } from "./account/index.js";
import {
  Server,
  serverListSchema,
  type UserServerAttributes,
  type UserServerList,
} from "./server/index.js";

export default class ClientAPI {
  private httpClient: HttpClient;
  readonly panelUrl: URL;
  public account: Account;

  constructor({ apiKey, panelUrl }: { apiKey: string; panelUrl: URL }) {
    this.panelUrl = panelUrl;
    this.httpClient = new HttpClient(panelUrl, apiKey);
    this.account = new Account(this.httpClient);
  }

  servers(options: {
    page?: number | undefined;
    per_page?: number | undefined;
  }) {
    const parsedValues = serverListSchema.parse(options);
    return this.httpClient.request<UserServerList<UserServerAttributes>>(
      "GET",
      `/client?page=${parsedValues?.page ?? 1}&per_page=${parsedValues?.per_page ?? 50}`,
    );
  }

  server(id: string) {
    return new Server(this.httpClient, this.panelUrl, id);
  }
}

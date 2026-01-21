import HttpClient from "../httpClient.js";
import Account from "./account.js";

export default class ClientAPI {
  public account: Account;
  private httpClient: HttpClient;

  constructor(apiUrl: URL, apiKey: string) {
    this.httpClient = new HttpClient(apiUrl, apiKey);
    this.account = new Account(this.httpClient);
  }
}

import ClientAPI from "./client/index.js";

export type role = "user" | "admin";

export interface BaseArgs {
  [key: string]: string | string[] | undefined;
}

export default class PterodactyleAPIClient {
  readonly apiUrl: URL;
  readonly role: role;
  public user: ClientAPI;

  constructor({ apiKey, panelUrl }: { apiKey: string; panelUrl: string }) {
    this.apiUrl = new URL(panelUrl);
    this.user = new ClientAPI(this.apiUrl, apiKey);

    if (apiKey.startsWith("ptlc")) this.role = "user";
    else if (apiKey.startsWith("ptla")) this.role = "admin";
    else throw new Error("Invalide API key");
  }
}

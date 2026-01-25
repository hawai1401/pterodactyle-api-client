import { ClientAPI } from "./client/index.js";
import type { role } from "./types.js";

export default class PterodactylAPIClient {
  readonly panelUrl: URL;
  readonly role: role;
  public user: ClientAPI;

  constructor({ apiKey, panelUrl }: { apiKey: string; panelUrl: string }) {
    this.panelUrl = new URL(panelUrl);
    this.user = new ClientAPI({ panelUrl: this.panelUrl, apiKey });

    if (apiKey.startsWith("ptlc")) this.role = "user";
    else if (apiKey.startsWith("ptla")) this.role = "admin";
    else throw new Error("Invalide API key");
  }
}

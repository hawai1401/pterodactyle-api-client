import type z from "zod";
import { ApplicationAPI } from "./application/index.js";
import { ClientAPI } from "./client/index.js";
import { clientSchema } from "./schemas.js";

export default class PterodactylAPIClient {
  readonly panelUrl: URL;
  public user: ClientAPI;
  public admin: ApplicationAPI | undefined;

  constructor(options: z.infer<typeof clientSchema>) {
    const { apiKey, panelUrl, role } = clientSchema.parse(options);

    this.panelUrl = new URL(panelUrl);
    this.user = new ClientAPI({ panelUrl: this.panelUrl, apiKey });

    if (role === "admin")
      this.admin = new ApplicationAPI({ panelUrl: this.panelUrl, apiKey });
  }

  isAdmin(): this is { admin: ApplicationAPI } {
    return this.admin !== undefined;
  }
}

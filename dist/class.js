import { ApplicationAPI } from "./application/index.js";
import { ClientAPI } from "./client/index.js";
export default class PterodactylAPIClient {
    panelUrl;
    user;
    admin;
    constructor({ apiKey, panelUrl }) {
        this.panelUrl = new URL(panelUrl);
        this.user = new ClientAPI({ panelUrl: this.panelUrl, apiKey });
        this.admin = new ApplicationAPI({ panelUrl: this.panelUrl, apiKey });
        if (!apiKey.startsWith("ptla") && !apiKey.startsWith("ptlc"))
            throw new Error("Invalide API key");
    }
}

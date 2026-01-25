import { ClientAPI } from "./client/index.js";
export default class PterodactylAPIClient {
    panelUrl;
    role;
    user;
    constructor({ apiKey, panelUrl }) {
        this.panelUrl = new URL(panelUrl);
        this.user = new ClientAPI({ panelUrl: this.panelUrl, apiKey });
        if (apiKey.startsWith("ptlc"))
            this.role = "user";
        else if (apiKey.startsWith("ptla"))
            this.role = "admin";
        else
            throw new Error("Invalide API key");
    }
}

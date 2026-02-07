import { ApplicationAPI } from "./application/index.js";
import { ClientAPI } from "./client/index.js";
import { clientSchema } from "./schemas.js";
export default class PterodactylAPIClient {
    panelUrl;
    user;
    admin;
    constructor(options) {
        const { apiKey, panelUrl, role } = clientSchema.parse(options);
        this.panelUrl = new URL(panelUrl);
        this.user = new ClientAPI({ panelUrl: this.panelUrl, apiKey });
        if (role === "admin")
            this.admin = new ApplicationAPI({ panelUrl: this.panelUrl, apiKey });
    }
    isAdmin() {
        return this.admin !== undefined;
    }
}

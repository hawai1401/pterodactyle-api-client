import { ApplicationAPI } from "./application/index.js";
import { ClientAPI } from "./client/index.js";
export default class PterodactylAPIClient {
    readonly panelUrl: URL;
    user: ClientAPI;
    admin: ApplicationAPI | undefined;
    constructor(options: {
        apiKey: string;
        panelUrl: string;
        role: "user" | "admin";
    });
    isAdmin(): this is {
        admin: ApplicationAPI;
    };
}
//# sourceMappingURL=class.d.ts.map
import { ClientAPI } from "./client/index.js";
import type { role } from "./types.js";
export default class PterodactylAPIClient {
    readonly panelUrl: URL;
    readonly role: role;
    user: ClientAPI;
    constructor({ apiKey, panelUrl }: {
        apiKey: string;
        panelUrl: string;
    });
}
//# sourceMappingURL=class.d.ts.map
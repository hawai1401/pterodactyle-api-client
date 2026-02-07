import type z from "zod";
import { ApplicationAPI } from "./application/index.js";
import { ClientAPI } from "./client/index.js";
import { clientSchema } from "./schemas.js";
export default class PterodactylAPIClient {
    readonly panelUrl: URL;
    user: ClientAPI;
    admin: ApplicationAPI | undefined;
    constructor(options: z.infer<typeof clientSchema>);
    isAdmin(): this is {
        admin: ApplicationAPI;
    };
}
//# sourceMappingURL=class.d.ts.map
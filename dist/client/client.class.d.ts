import { Account } from "./account/index.js";
import { Server } from "./server/index.js";
export default class ClientAPI {
    private httpClient;
    readonly panelUrl: URL;
    account: Account;
    server: Server;
    constructor({ apiKey, panelUrl }: {
        apiKey: string;
        panelUrl: URL;
    });
}
//# sourceMappingURL=client.class.d.ts.map
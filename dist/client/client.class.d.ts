import { Account } from "./account/index.js";
import { Server, type UserServerAttributes, type UserServerList } from "./server/index.js";
export default class ClientAPI {
    private httpClient;
    readonly panelUrl: URL;
    account: Account;
    constructor({ apiKey, panelUrl }: {
        apiKey: string;
        panelUrl: URL;
    });
    servers(options: {
        page?: number | undefined;
        per_page?: number | undefined;
    }): Promise<UserServerList<UserServerAttributes>>;
    server(id: string): Server;
}
//# sourceMappingURL=client.class.d.ts.map
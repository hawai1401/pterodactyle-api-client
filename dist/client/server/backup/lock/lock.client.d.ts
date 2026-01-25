import type HttpClient from "../../../../class/HttpClient.js";
export default class LockClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    toggle(id: string, backup: string): Promise<void>;
}
//# sourceMappingURL=lock.client.d.ts.map
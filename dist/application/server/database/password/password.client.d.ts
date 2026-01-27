import type HttpClient from "../../../../class/HttpClient.js";
export default class PasswordClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    reset(server: number, database: number): Promise<void>;
}
//# sourceMappingURL=password.client.d.ts.map
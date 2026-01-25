import type HttpClient from "../../../../class/HttpClient.js";
export default class PasswordClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    rotate(id: string, database: string): Promise<{
        password: string;
        object: "server_database";
        attributes: import("../database.types.js").DatabaseAttributesWithPassword;
    }>;
}
//# sourceMappingURL=password.client.d.ts.map
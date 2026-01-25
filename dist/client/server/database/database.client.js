import z from "zod";
import PasswordClient from "./password/password.client.js";
export default class DatabaseClient {
    httpClient;
    password;
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.password = new PasswordClient(httpClient);
    }
    list(id) {
        return this.httpClient.request("GET", `/client/servers/${id}/databases`);
    }
    async create(id, args) {
        const schema = z.object({
            database: z.string().min(1).max(48),
            remote: z.string(),
        });
        const { database, remote } = schema.parse(args);
        const res = await this.httpClient.request("POST", `/client/servers/${id}/databases`, { database, remote });
        return {
            ...res,
            password: res.attributes.relationships.password.attributes.password,
        };
    }
    delete(id, database) {
        return this.httpClient.request("DELETE", `/client/servers/${id}/databases/${database}`);
    }
}

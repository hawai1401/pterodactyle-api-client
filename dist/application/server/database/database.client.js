import PasswordClient from "./password/password.client.js";
export default class DatabaseClient {
    httpClient;
    password;
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.password = new PasswordClient(httpClient);
    }
    async list(server) {
        const res = await this.httpClient.request("GET", `/application/servers/${server}/databases`);
        return {
            ...res,
            data: res.data.map((db) => ({
                ...db,
                attributes: {
                    ...db.attributes,
                    created_at: new Date(db.attributes.created_at),
                    updated_at: new Date(db.attributes.updated_at),
                },
            })),
        };
    }
    async info(server, database) {
        const res = await this.httpClient.request("GET", `/application/servers/${server}/databases/${database}`);
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    async create(server, args) {
        const res = await this.httpClient.request("POST", `/application/servers/${server}/databases`, args);
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    delete(server, database) {
        return this.httpClient.request("DELETE", `/application/servers/${server}/databases/${database}`);
    }
}

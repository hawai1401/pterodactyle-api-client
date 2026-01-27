import DatabaseClient from "./database/database.client.js";
export default class ServerClient {
    httpClient;
    database;
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.database = new DatabaseClient(httpClient);
    }
    async list() {
        const res = await this.httpClient.request("GET", "/application/servers");
        return {
            ...res,
            data: res.data.map((server) => ({
                ...server,
                created_at: new Date(server.created_at),
                updated_at: new Date(server.updated_at),
            })),
        };
    }
    async info({ id, external_id, }) {
        if (id) {
            const res = await this.httpClient.request("GET", `/application/servers/${id}`);
            return {
                ...res,
                attributes: {
                    ...res.attributes,
                    created_at: new Date(res.attributes.created_at),
                    updated_at: new Date(res.attributes.updated_at),
                },
            };
        }
        else if (external_id) {
            const res = await this.httpClient.request("GET", `/application/servers/external/${external_id}`);
            return {
                ...res,
                attributes: {
                    ...res.attributes,
                    created_at: new Date(res.attributes.created_at),
                    updated_at: new Date(res.attributes.updated_at),
                },
            };
        }
        else
            throw new Error("Vous devez spécifier au moins un des 2 paramètres de recherche d'un utilisateur !");
    }
    async create(options) {
        const res = await this.httpClient.request("POST", `/application/servers`, options);
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    async edit(server, { details, configuration, startup }) {
        const basePath = `/application/servers/${server}`;
        const requests = [];
        if (details)
            requests.push(this.httpClient.request("PATCH", `${basePath}/details`, details));
        if (configuration)
            requests.push(this.httpClient.request("PATCH", `${basePath}/build`, configuration));
        if (startup)
            requests.push(this.httpClient.request("PATCH", `${basePath}/startup`, startup));
        if (requests.length === 0)
            throw new Error("Aucunes modifications spécifiées !");
        const res = await Promise.all(requests);
        return {
            ...res[0],
            attributes: {
                ...res[0].attributes,
                created_at: new Date(res[0].attributes.created_at),
                updated_at: new Date(res[0].attributes.updated_at),
            },
        };
    }
    suspend(id) {
        return this.httpClient.request("POST", `/application/servers/${id}/suspend`);
    }
    unsuspend(id) {
        return this.httpClient.request("POST", `/application/servers/${id}/unsuspend`);
    }
    reinstall(id) {
        return this.httpClient.request("POST", `/application/servers/${id}/reinstall`);
    }
    delete(id, force) {
        return this.httpClient.request("DELETE", `/application/servers/${id}${force ? "?force=true" : ""}`);
    }
}

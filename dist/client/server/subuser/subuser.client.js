export default class SubuserClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list(id) {
        const res = await this.httpClient.request("GET", `/client/servers/${id}/users`);
        return {
            ...res,
            data: res.data.map((subuser) => ({
                ...subuser,
                attributes: {
                    ...subuser.attributes,
                    created_at: new Date(subuser.attributes.created_at),
                },
            })),
        };
    }
    async info(id, subuser) {
        const res = await this.httpClient.request("GET", `/client/servers/${id}/users/${subuser}`);
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
            },
        };
    }
    async create(id, { email, permissions }) {
        const res = await this.httpClient.request("POST", `/client/servers/${id}/users`, { email, permissions });
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
            },
        };
    }
    async edit(id, subuser, { permissions }) {
        const res = await this.httpClient.request("POST", `/client/servers/${id}/users/${subuser}`, { permissions });
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
            },
        };
    }
    delete(id, subuser) {
        return this.httpClient.request("DELETE", `/client/servers/${id}/users/${subuser}`);
    }
}

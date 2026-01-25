export default class ApiKeyClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list() {
        const res = await this.httpClient.request("GET", "/client/account/api-keys");
        return {
            ...res,
            data: res.data.map((apiKey) => ({
                ...apiKey,
                attributes: {
                    ...apiKey.attributes,
                    last_used_at: new Date(apiKey.attributes.last_used_at),
                    created_at: new Date(apiKey.attributes.created_at),
                },
            })),
        };
    }
    async create({ description, allowed_ips }) {
        const res = await this.httpClient.request("POST", "/client/account/api-keys", {
            description,
            allowed_ips,
        });
        return {
            ...res,
            api_key: `${res.attributes.identifier}${res.meta.secret_token}`,
        };
    }
    delete({ identifier }) {
        return this.httpClient.request("DELETE", `/client/account/api-keys/${identifier}`);
    }
}

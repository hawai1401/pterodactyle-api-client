export default class SshKeyClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list() {
        const res = await this.httpClient.request("GET", "/client/account/ssh-keys");
        return {
            ...res,
            data: res.data.map((sshKey) => ({
                ...sshKey,
                attributes: {
                    ...sshKey.attributes,
                    created_at: new Date(sshKey.attributes.created_at),
                },
            })),
        };
    }
    async create({ name, public_key }) {
        const res = await this.httpClient.request("POST", "/client/account/ssh-keys", {
            name,
            public_key,
        });
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
            },
        };
    }
    delete({ fingerprint }) {
        return this.httpClient.request("DELETE", `/client/account/api-keys/remove`, { fingerprint });
    }
}

import { nestId } from "./nest.schemas.js";
export default class NestClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list() {
        const res = await this.httpClient.request("GET", "/application/nests");
        return {
            ...res,
            data: res.data.map((nest) => ({
                ...nest,
                attributes: {
                    ...nest.attributes,
                    created_at: new Date(nest.attributes.created_at),
                    updated_at: new Date(nest.attributes.updated_at),
                },
            })),
        };
    }
    async info(id) {
        const res = await this.httpClient.request("GET", `/application/nests/${nestId.parse(id)}`);
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
}

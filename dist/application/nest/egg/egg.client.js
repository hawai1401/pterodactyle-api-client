import { nestEggId, nestId } from "../nest.schemas.js";
export default class EggClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list(id) {
        const res = await this.httpClient.request("GET", `/application/nests/${nestId.parse(id)}/eggs`);
        return {
            ...res,
            data: res.data.map((egg) => ({
                ...egg.attributes,
                created_at: new Date(egg.attributes.created_at),
                updated_at: new Date(egg.attributes.updated_at),
            })),
        };
    }
    async info(id, egg) {
        const res = await this.httpClient.request("GET", `/application/nests/${nestId.parse(id)}/eggs/${nestEggId.parse(egg)}`);
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

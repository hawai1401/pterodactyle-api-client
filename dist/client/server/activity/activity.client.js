import HttpClient from "../../../class/HttpClient.js";
export default class ActivityClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list(id, { page, per_page, event, } = {}) {
        const res = await this.httpClient.request("GET", `/client/servers/${id}/activity?page=${page ?? 1}&per_page=${per_page ?? 50}${event ? `&filter[event]=${event}` : ""}`);
        return {
            ...res,
            data: res.data.map((data) => ({
                ...data,
                attributes: {
                    ...data.attributes,
                    timestamp: new Date(data.attributes.timestamp),
                },
            })),
        };
    }
}

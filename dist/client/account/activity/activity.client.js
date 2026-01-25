export default class ActivityClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list({ page, per_page, event, } = {}) {
        const res = await this.httpClient.request("GET", `/client/account/activity?page=${page ?? 1}&per_page=${per_page ?? 50}${event ? `&filter[event]=${event}` : ""}`);
        return {
            ...res,
            data: res.data.map((activity) => ({
                ...activity,
                attributes: {
                    ...activity.attributes,
                    timestamp: new Date(activity.attributes.timestamp),
                },
            })),
        };
    }
}

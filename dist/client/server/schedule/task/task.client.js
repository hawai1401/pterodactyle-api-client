export default class TaskClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async create(id, schedule, { action, continue_on_failure, payload, time_offset, }) {
        const res = await this.httpClient.request("POST", `/client/servers/${id}/schedules/${schedule}/tasks`, {
            action,
            continue_on_failure,
            payload,
            time_offset,
        });
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    async edit(id, schedule, task, { action, continue_on_failure, payload, time_offset, }) {
        const res = await this.httpClient.request("POST", `/client/servers/${id}/schedules/${schedule}/tasks/${task}`, {
            action,
            continue_on_failure,
            payload,
            time_offset,
        });
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    delete(id, schedule, task) {
        return this.httpClient.request("DELETE", `/client/servers/${id}/schedules/${schedule}/tasks/${task}`);
    }
}

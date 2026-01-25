export default class BackupClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list(id) {
        const res = await this.httpClient.request("GET", `/client/servers/${id}/backups`);
        return {
            ...res,
            data: res.data.map((backup) => ({
                ...backup,
                attributes: {
                    ...backup.attributes,
                    created_at: new Date(backup.attributes.created_at),
                    completed_at: backup.attributes.completed_at
                        ? new Date(backup.attributes.completed_at)
                        : null,
                },
            })),
        };
    }
    async info(id, backup) {
        const res = await this.httpClient.request("GET", `/client/servers/${id}/backups/${backup}`);
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                completed_at: res.attributes.completed_at
                    ? new Date(res.attributes.completed_at)
                    : null,
            },
        };
    }
    async create(id, { ignored, is_locked, name }) {
        const res = await this.httpClient.request("POST", `/client/servers/${id}/backups`, { ignored, is_locked, name });
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                completed_at: res.attributes.completed_at
                    ? new Date(res.attributes.completed_at)
                    : null,
            },
        };
    }
    download(id, backup) {
        return this.httpClient.request("GET", `/client/servers/${id}/backups/${backup}/download`);
    }
    delete(id, backup) {
        return this.httpClient.request("DELETE", `/client/servers/${id}/backups/${backup}`);
    }
    restore(id, backup, { truncate } = {}) {
        return this.httpClient.request("POST", `/client/servers/${id}/backups/${backup}/restore`, { truncate });
    }
}

export default class LockClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    toggle(id, backup) {
        return this.httpClient.request("POST", `/client/servers/${id}/backups/${backup}/lock`);
    }
}

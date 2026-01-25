export default class StartupClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    info(id) {
        return this.httpClient.request("GET", `/client/servers/${id}/settings/startup`);
    }
    edit(id, { key, value }) {
        return this.httpClient.request("PUT", `/client/servers/${id}/settings/startup`, { key, value });
    }
}

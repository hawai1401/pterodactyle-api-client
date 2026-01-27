export default class PasswordClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    reset(server, database) {
        return this.httpClient.request("POST", `/application/servers/${server}/databases/${database}/reset-password`);
    }
}

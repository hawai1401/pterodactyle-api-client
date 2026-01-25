export default class PowerClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    start(id) {
        return this.httpClient.request("POST", `/client/servers/${id}/power`, {
            signal: "start",
        });
    }
    stop(id) {
        return this.httpClient.request("POST", `/client/servers/${id}/power`, {
            signal: "stop",
        });
    }
    restart(id) {
        return this.httpClient.request("POST", `/client/servers/${id}/power`, {
            signal: "restart",
        });
    }
    kill(id) {
        return this.httpClient.request("POST", `/client/servers/${id}/power`, {
            signal: "kill",
        });
    }
}

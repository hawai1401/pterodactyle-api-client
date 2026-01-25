export default class A2fClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    enable({ password, code }) {
        return this.httpClient.request("POST", "/client/account/two-factor", { password, code });
    }
    disable({ password }) {
        return this.httpClient.request("POST", "/client/account/two-factor/disable", { password });
    }
    getA2fQrCode() {
        return this.httpClient.request("GET", "/client/account/two-factor");
    }
}

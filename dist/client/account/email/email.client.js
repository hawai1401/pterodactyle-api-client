export default class EmailClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    editEmail({ email, password }) {
        return this.httpClient.request("PUT", "/client/account/email", { email, password });
    }
}

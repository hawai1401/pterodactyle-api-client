export default class PasswordClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    edit({ current_password, password, password_confirmation, }) {
        return this.httpClient.request("PUT", "/client/account/password", {
            current_password,
            password,
            password_confirmation,
        });
    }
}

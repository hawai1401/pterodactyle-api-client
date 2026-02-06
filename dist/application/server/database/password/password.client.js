import { applicationServerDatabaseId, applicationServerId, } from "../../server.schemas.js";
export default class PasswordClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    reset(server, database) {
        return this.httpClient.request("POST", `/application/servers/${applicationServerId.parse(server)}/databases/${applicationServerDatabaseId.parse(database)}/reset-password`);
    }
}

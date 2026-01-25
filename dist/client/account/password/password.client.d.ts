import type HttpClient from "../../../class/HttpClient.js";
import type { EditPasswordArgs } from "./password.types.js";
export default class PasswordClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    edit({ current_password, password, password_confirmation, }: EditPasswordArgs): Promise<void>;
}
//# sourceMappingURL=password.client.d.ts.map
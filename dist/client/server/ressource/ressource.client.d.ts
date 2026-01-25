import type HttpClient from "../../../class/HttpClient.js";
import type { Stats } from "./ressource.types.js";
export default class RessourceClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    usage(id: string): Promise<Stats>;
}
//# sourceMappingURL=ressource.client.d.ts.map
import type HttpClient from "../../../class/HttpClient.js";
export default class PowerClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    start(id: string): Promise<void>;
    stop(id: string): Promise<void>;
    restart(id: string): Promise<void>;
    kill(id: string): Promise<void>;
}
//# sourceMappingURL=power.client.d.ts.map
import HttpClient from "../../../class/HttpClient.js";
import type { ServerActivityList, ServerEvent } from "./activity.types.js";
export default class ActivityClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list<T extends ServerEvent>(id: string, { page, per_page, event, }?: {
        page?: number | undefined;
        per_page?: number | undefined;
        event?: T | undefined;
    }): Promise<ServerActivityList<Date, T>>;
}
//# sourceMappingURL=activity.client.d.ts.map
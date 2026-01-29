import type HttpClient from "../../class/HttpClient.js";
export default class NestClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list(): Promise<{
        data: {
            attributes: {
                created_at: Date;
                updated_at: Date;
                id: number;
                uuid: string;
                author: string;
                name: string;
                description: string;
            };
            object: "nest";
        }[];
        meta: {
            pagination: import("../../types.js").Pagination;
        };
        object: "list";
    }>;
    info(id: number): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            uuid: string;
            author: string;
            name: string;
            description: string;
        };
        object: "nest";
    }>;
}
//# sourceMappingURL=nest.client.d.ts.map
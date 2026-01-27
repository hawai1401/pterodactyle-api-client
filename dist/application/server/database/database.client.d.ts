import type HttpClient from "../../../class/HttpClient.js";
import type { CreateApplicationDatabase } from "./database.types.js";
import PasswordClient from "./password/password.client.js";
export default class DatabaseClient {
    private httpClient;
    password: PasswordClient;
    constructor(httpClient: HttpClient);
    list(server: number): Promise<{
        data: {
            attributes: {
                created_at: Date;
                updated_at: Date;
                id: number;
                server: number;
                host: number;
                database: string;
                username: string;
                remote: string | import("../../../types.js").IP | "%";
                max_connections: number;
            };
            object: "server_database";
        }[];
        object: "list";
    }>;
    info(server: number, database: number): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            server: number;
            host: number;
            database: string;
            username: string;
            remote: string | import("../../../types.js").IP | "%";
            max_connections: number;
        };
        object: "server_database";
    }>;
    create(server: number, args: CreateApplicationDatabase): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            server: number;
            host: number;
            database: string;
            username: string;
            remote: string | import("../../../types.js").IP | "%";
            max_connections: number;
        };
        meta: {
            ressource: string;
        };
        object: "server_database";
    }>;
    delete(server: number, database: number): Promise<void>;
}
//# sourceMappingURL=database.client.d.ts.map
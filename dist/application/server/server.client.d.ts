import type HttpClient from "../../class/HttpClient.js";
import type { UserServer, UserServerAttributesWithDate } from "../../client/server/server.types.js";
import DatabaseClient from "./database/database.client.js";
import type { CreateServerArgs, EditApplicationServerArgs } from "./server.types.js";
export default class ServerClient {
    private httpClient;
    database: DatabaseClient;
    constructor(httpClient: HttpClient);
    list(): Promise<{
        data: {
            created_at: Date;
            updated_at: Date;
            server_owner: boolean;
            identifier: string;
            internal_id: number;
            uuid: string;
            name: string;
            is_node_under_maintenance: boolean;
            description: string;
            status: null;
            is_suspended: boolean;
            is_installing: boolean;
            is_transferring: boolean;
            node: string;
            sftp_details: {
                ip: string;
                port: number;
            };
            invocation: string;
            docker_image: string;
            egg_features: string[];
            feature_limits: {
                databases: number;
                allocations: number;
                backups: number;
            };
            user_permissions: import("../../client/server/server.types.js").ServerPermissions[];
            limits: {
                memory: number;
                swap: number;
                disk: number;
                io: number;
                cpu: number;
                threads: null | string;
                oom_disabled: boolean;
            };
            relationships: {
                allocations: {
                    object: "list";
                    data: import("../../client/server/server.types.js").Allocation[];
                };
                variables: {
                    object: "list";
                    data: import("../../client/server/server.types.js").EggVariable[];
                };
            };
        }[];
        meta: {
            pagination: import("../../types.js").Pagination;
        };
        object: "list";
    }>;
    info({ id, external_id, }: {
        id?: number | undefined;
        external_id?: number | undefined;
    }): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            server_owner: boolean;
            identifier: string;
            internal_id: number;
            uuid: string;
            name: string;
            is_node_under_maintenance: boolean;
            description: string;
            status: null;
            is_suspended: boolean;
            is_installing: boolean;
            is_transferring: boolean;
            node: string;
            sftp_details: {
                ip: string;
                port: number;
            };
            invocation: string;
            docker_image: string;
            egg_features: string[];
            feature_limits: {
                databases: number;
                allocations: number;
                backups: number;
            };
            user_permissions: import("../../client/server/server.types.js").ServerPermissions[];
            limits: {
                memory: number;
                swap: number;
                disk: number;
                io: number;
                cpu: number;
                threads: null | string;
                oom_disabled: boolean;
            };
            relationships: {
                allocations: {
                    object: "list";
                    data: import("../../client/server/server.types.js").Allocation[];
                };
                variables: {
                    object: "list";
                    data: import("../../client/server/server.types.js").EggVariable[];
                };
            };
        };
        object: "server";
    }>;
    create(options: CreateServerArgs): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            server_owner: boolean;
            identifier: string;
            internal_id: number;
            uuid: string;
            name: string;
            is_node_under_maintenance: boolean;
            description: string;
            status: null;
            is_suspended: boolean;
            is_installing: boolean;
            is_transferring: boolean;
            node: string;
            sftp_details: {
                ip: string;
                port: number;
            };
            invocation: string;
            docker_image: string;
            egg_features: string[];
            feature_limits: {
                databases: number;
                allocations: number;
                backups: number;
            };
            user_permissions: import("../../client/server/server.types.js").ServerPermissions[];
            limits: {
                memory: number;
                swap: number;
                disk: number;
                io: number;
                cpu: number;
                threads: null | string;
                oom_disabled: boolean;
            };
            relationships: {
                allocations: {
                    object: "list";
                    data: import("../../client/server/server.types.js").Allocation[];
                };
                variables: {
                    object: "list";
                    data: import("../../client/server/server.types.js").EggVariable[];
                };
            };
        };
        object: "server";
    }>;
    edit(server: number, { details, configuration, startup }: EditApplicationServerArgs): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            server_owner: boolean;
            identifier: string;
            internal_id: number;
            uuid: string;
            name: string;
            is_node_under_maintenance: boolean;
            description: string;
            status: null;
            is_suspended: boolean;
            is_installing: boolean;
            is_transferring: boolean;
            node: string;
            sftp_details: {
                ip: string;
                port: number;
            };
            invocation: string;
            docker_image: string;
            egg_features: string[];
            feature_limits: {
                databases: number;
                allocations: number;
                backups: number;
            };
            user_permissions: import("../../client/server/server.types.js").ServerPermissions[];
            limits: {
                memory: number;
                swap: number;
                disk: number;
                io: number;
                cpu: number;
                threads: null | string;
                oom_disabled: boolean;
            };
            relationships: {
                allocations: {
                    object: "list";
                    data: import("../../client/server/server.types.js").Allocation[];
                };
                variables: {
                    object: "list";
                    data: import("../../client/server/server.types.js").EggVariable[];
                };
            };
        };
        object: "server";
    }>;
    suspend(id: number): Promise<UserServer<UserServerAttributesWithDate<string>>>;
    unsuspend(id: number): Promise<UserServer<UserServerAttributesWithDate<string>>>;
    reinstall(id: number): Promise<UserServer<UserServerAttributesWithDate<string>>>;
    delete(id: number, force?: boolean | undefined): Promise<UserServer<UserServerAttributesWithDate<string>>>;
}
//# sourceMappingURL=server.client.d.ts.map
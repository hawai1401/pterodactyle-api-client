import type HttpClient from "../../class/HttpClient.js";
import type { CreateUserArgs, User, UserAttributes, UserWithServersAttributes } from "./users.types.js";
import type { BaseListArgs, Sort } from "../../types.js";
export default class UsersClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list<T extends boolean | undefined>(options?: {
        includeServers?: T | undefined;
        filter?: {
            uuid?: string | undefined;
            username?: string | undefined;
            email?: string | undefined;
            external_id?: string | undefined;
        } | undefined;
        sort?: {
            id?: Sort | undefined;
            uuid?: Sort | undefined;
        } | undefined;
    } & BaseListArgs): Promise<{
        data: {
            attributes: (T extends true ? UserWithServersAttributes : UserAttributes<string>) & {
                created_at: Date;
                updated_at: Date;
                relationships: {
                    servers: {
                        length: number;
                        toString(): string;
                        toLocaleString(): string;
                        toLocaleString(locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
                        pop(): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        } | undefined;
                        push(...items: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]): number;
                        concat(...items: ConcatArray<{
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }>[]): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[];
                        concat(...items: ({
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        } | ConcatArray<{
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }>)[]): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[];
                        join(separator?: string): string;
                        reverse(): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[];
                        shift(): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        } | undefined;
                        slice(start?: number, end?: number): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[];
                        sort(compareFn?: ((a: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, b: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }) => number) | undefined): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[];
                        splice(start: number, deleteCount?: number): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[];
                        splice(start: number, deleteCount: number, ...items: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[];
                        unshift(...items: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]): number;
                        indexOf(searchElement: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, fromIndex?: number): number;
                        lastIndexOf(searchElement: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, fromIndex?: number): number;
                        every<S extends {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }>(predicate: (value: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, index: number, array: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => value is S, thisArg?: any): this is S[];
                        every(predicate: (value: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, index: number, array: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => unknown, thisArg?: any): boolean;
                        some(predicate: (value: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, index: number, array: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => unknown, thisArg?: any): boolean;
                        forEach(callbackfn: (value: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, index: number, array: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => void, thisArg?: any): void;
                        map<U>(callbackfn: (value: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, index: number, array: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => U, thisArg?: any): U[];
                        filter<S extends {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }>(predicate: (value: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, index: number, array: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => value is S, thisArg?: any): S[];
                        filter(predicate: (value: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, index: number, array: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => unknown, thisArg?: any): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[];
                        reduce(callbackfn: (previousValue: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, currentValue: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, currentIndex: number, array: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        };
                        reduce(callbackfn: (previousValue: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, currentValue: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, currentIndex: number, array: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, initialValue: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        };
                        reduce<U>(callbackfn: (previousValue: U, currentValue: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, currentIndex: number, array: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => U, initialValue: U): U;
                        reduceRight(callbackfn: (previousValue: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, currentValue: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, currentIndex: number, array: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        };
                        reduceRight(callbackfn: (previousValue: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, currentValue: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, currentIndex: number, array: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, initialValue: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        };
                        reduceRight<U>(callbackfn: (previousValue: U, currentValue: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, currentIndex: number, array: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => U, initialValue: U): U;
                        find<S extends {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }>(predicate: (value: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, index: number, obj: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => value is S, thisArg?: any): S | undefined;
                        find(predicate: (value: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, index: number, obj: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => unknown, thisArg?: any): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        } | undefined;
                        findIndex(predicate: (value: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, index: number, obj: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => unknown, thisArg?: any): number;
                        fill(value: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, start?: number, end?: number): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[];
                        copyWithin(target: number, start: number, end?: number): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[];
                        entries(): ArrayIterator<[number, {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }]>;
                        keys(): ArrayIterator<number>;
                        values(): ArrayIterator<{
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        includes(searchElement: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, fromIndex?: number): boolean;
                        flatMap<U, This = undefined>(callback: (this: This, value: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, index: number, array: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => U | readonly U[], thisArg?: This | undefined): U[];
                        flat<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[];
                        at(index: number): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        } | undefined;
                        findLast<S extends {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }>(predicate: (value: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, index: number, array: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => value is S, thisArg?: any): S | undefined;
                        findLast(predicate: (value: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, index: number, array: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => unknown, thisArg?: any): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        } | undefined;
                        findLastIndex(predicate: (value: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, index: number, array: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]) => unknown, thisArg?: any): number;
                        toReversed(): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[];
                        toSorted(compareFn?: ((a: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }, b: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }) => number) | undefined): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[];
                        toSpliced(start: number, deleteCount: number, ...items: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[]): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[];
                        toSpliced(start: number, deleteCount?: number): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[];
                        with(index: number, value: {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }): {
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        }[];
                        [Symbol.iterator](): ArrayIterator<{
                            attributes: {
                                updated_at: string;
                                created_at: string;
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
                        [Symbol.unscopables]: {
                            [x: number]: boolean | undefined;
                            length?: boolean;
                            toString?: boolean;
                            toLocaleString?: boolean;
                            pop?: boolean;
                            push?: boolean;
                            concat?: boolean;
                            join?: boolean;
                            reverse?: boolean;
                            shift?: boolean;
                            slice?: boolean;
                            sort?: boolean;
                            splice?: boolean;
                            unshift?: boolean;
                            indexOf?: boolean;
                            lastIndexOf?: boolean;
                            every?: boolean;
                            some?: boolean;
                            forEach?: boolean;
                            map?: boolean;
                            filter?: boolean;
                            reduce?: boolean;
                            reduceRight?: boolean;
                            find?: boolean;
                            findIndex?: boolean;
                            fill?: boolean;
                            copyWithin?: boolean;
                            entries?: boolean;
                            keys?: boolean;
                            values?: boolean;
                            includes?: boolean;
                            flatMap?: boolean;
                            flat?: boolean;
                            at?: boolean;
                            findLast?: boolean;
                            findLastIndex?: boolean;
                            toReversed?: boolean;
                            toSorted?: boolean;
                            toSpliced?: boolean;
                            with?: boolean;
                            [Symbol.iterator]?: boolean;
                            readonly [Symbol.unscopables]?: boolean;
                        };
                        object: "list";
                        data: import("../../client/server/server.types.js").UserServer<import("../../client/server/server.types.js").UserServerAttributesWithDate<string>>[];
                    };
                } | undefined;
            };
            object: "user";
        }[];
        meta: {
            pagination: import("../../types.js").Pagination;
        };
        object: "list";
    }>;
    create(args: CreateUserArgs): Promise<User<UserAttributes<string>>>;
}
//# sourceMappingURL=users.client.d.ts.map
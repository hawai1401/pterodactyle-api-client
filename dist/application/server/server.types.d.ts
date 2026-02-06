import type { UserServerAttributesWithDate } from "../../client/server/server.types.js";
import type { BaseArgs, EnvironmentVariable, ListwithPagination } from "../../types.js";
export interface ApplicationServerList extends ListwithPagination {
    data: UserServerAttributesWithDate<string>[];
}
export interface CreateServerArgs extends BaseArgs {
    external_id?: string | undefined;
    name: string;
    description?: string | undefined;
    user: number;
    egg: number;
    docker_image?: string | undefined;
    startup?: string | undefined;
    environment?: Record<EnvironmentVariable, string> | undefined;
    skip_scripts?: boolean | undefined;
    limits: {
        memory: number;
        swap: number;
        disk: number;
        io: number;
        threads?: string | undefined;
        cpu: number;
    };
    feature_limits: {
        databases: number;
        backups: number;
        allocations?: number | undefined;
    };
    allocation: {
        default: number;
        additional?: number[] | undefined;
    };
    start_on_completion?: boolean | undefined;
}
export interface EditApplicationServerDetailsArgs extends BaseArgs {
    name: string;
    user: number;
    external_id?: string | undefined;
    description?: string | undefined;
}
export interface EditApplicationServerConfigurationArgs extends BaseArgs {
    allocation: number;
    oom_disabled?: boolean | undefined;
    limits: {
        memory?: number | undefined;
        swap?: number | undefined;
        disk?: number | undefined;
        io?: number | undefined;
        threads?: string | undefined;
        cpu?: number | undefined;
    };
    feature_limits: {
        databases: number;
        backups: number;
        allocations?: number | undefined;
    };
    add_allocations?: number[] | undefined;
    remove_allocations?: number[] | undefined;
}
export interface EditApplicationServerStartupArgs extends BaseArgs {
    startup: string;
    environment: Record<EnvironmentVariable, string>;
    egg: number;
    image: string;
    skip_scripts: boolean;
}
export interface EditApplicationServerArgs extends BaseArgs {
    details?: EditApplicationServerDetailsArgs | undefined;
    configuration?: EditApplicationServerConfigurationArgs | undefined;
    startup?: EditApplicationServerStartupArgs | undefined;
}
//# sourceMappingURL=server.types.d.ts.map
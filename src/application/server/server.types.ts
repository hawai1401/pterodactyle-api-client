import type { UserServerAttributesWithDate } from "../../client/server/server.types.js";
import type {
  BaseArgs,
  EnvironmentVariable,
  ListwithPagination,
} from "../../types.js";

export interface ApplicationServerList extends ListwithPagination {
  data: UserServerAttributesWithDate<string>[];
}

export interface CreateServerArgs extends BaseArgs {
  name: string;
  user: number;
  egg: number;
  limits: {
    memory: number;
    swap: number;
    disk: number;
    cpu: number;
    io: number;
    threads?: string | undefined;
    oom_disabled?: boolean | undefined;
  };
  feature_limits: {
    databases: number;
    allocations: number;
    backups: number;
  };
  allocation: {
    [key: string]: number | number[];
    default: number;
    additional?: number[];
  };
  docker_image?: string | undefined;
  startup?: string | undefined;
  environment?: Record<EnvironmentVariable, string> | undefined;
}

export interface EditApplicationServerDetailsArgs extends BaseArgs {
  name: string;
  user: number;
  external_id?: string | undefined;
  description?: string | undefined;
}

export interface EditApplicationServerConfigurationArgs extends BaseArgs {
  allocation: number;
  memory: number;
  swap: number;
  disk: number;
  io: number;
  cpu: number;
  threads?: string | undefined;
  feature_limits: {
    databases: number;
    backups: number;
    allocations?: number | undefined;
  };
  add_allocations?: number[] | undefined;
  remove_allocations?: number[] | undefined;
  oom_disabled?: boolean | undefined;
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

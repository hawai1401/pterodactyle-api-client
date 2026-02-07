import type HttpClient from "../../class/HttpClient.js";
import type { Sort } from "../../types.js";
import AllocationClient from "./allocation/allocation.client.js";
import AllocationsClient from "./allocations/allocations.client.js";
import BackupClient from "./backup/backup.client.js";
import BackupsClient from "./backups/backups.client.js";
import ConsoleClient from "./console/console.client.js";
import DatabaseClient from "./database/database.client.js";
import DatabasesClient from "./databases/databases.client.js";
import ImageClient from "./image/image.client.js";
import PowerClient from "./power/power.client.js";
import RessourceClient from "./ressource/ressource.client.js";
import ScheduleClient from "./schedule/schedule.client.js";
import SchedulesClient from "./schedules/schedules.client.js";
import {
  renameServerSchema,
  userServerActivityPaginationSchema,
  userServerId,
} from "./server.schemas.js";
import type {
  EditServerArgs,
  UserServerAttributes,
  UserServer,
  ServerEvent,
  ServerActivityList,
} from "./server.types.js";
import StartupClient from "./startup/startup.client.js";
import SubuserClient from "./subuser/subuser.client.js";
import SubusersClient from "./subusers/subusers.client.js";

export default class Servers {
  public allocations: AllocationsClient;
  public backups: BackupsClient;
  public console: ConsoleClient;
  public databases: DatabasesClient;
  public image: ImageClient;
  public power: PowerClient;
  public ressource: RessourceClient;
  public schedules: SchedulesClient;
  public startup: StartupClient;
  public subusers: SubusersClient;

  readonly id: string;

  constructor(
    private httpClient: HttpClient,
    readonly panelUrl: URL,
    id: string,
  ) {
    this.id = userServerId.parse(id);

    this.allocations = new AllocationsClient(httpClient, this.id);
    this.backups = new BackupsClient(httpClient, this.id);
    this.console = new ConsoleClient(httpClient, panelUrl, this.id);
    this.databases = new DatabasesClient(httpClient, this.id);
    this.image = new ImageClient(httpClient, this.id);
    this.power = new PowerClient(httpClient, this.id);
    this.ressource = new RessourceClient(httpClient, this.id);
    this.schedules = new SchedulesClient(httpClient, this.id);
    this.startup = new StartupClient(httpClient, this.id);
    this.subusers = new SubusersClient(httpClient, this.id);
  }

  async activity<T extends ServerEvent>({
    page,
    per_page,
    event,
    sort,
  }: {
    page?: number | undefined;
    per_page?: number | undefined;
    event?: T | undefined;
    sort?: {
      timestamp?: Sort | undefined;
    };
  } = {}): Promise<ServerActivityList<Date, T>> {
    const parsedValues = userServerActivityPaginationSchema.parse({
      page,
      per_page,
      event,
      sort,
    });
    const res = await this.httpClient.request<ServerActivityList<string, T>>(
      "GET",
      `/client/servers/${this.id}/activity?page=${parsedValues.page ?? 1}&per_page=${parsedValues.per_page ?? 50}${parsedValues.event ? `&filter[event]=${parsedValues.event}` : ""}${parsedValues.sort?.timestamp ? (parsedValues.sort.timestamp === "ascending" ? "&sort=timestamp" : "&sort=-timestamp") : ""}`,
    );
    return {
      ...res,
      data: res.data.map((data) => ({
        ...data,
        attributes: {
          ...data.attributes,
          timestamp: new Date(data.attributes.timestamp),
        },
      })),
    };
  }

  allocation(allocation: number) {
    return new AllocationClient(this.httpClient, this.id, allocation);
  }

  backup(backup: string) {
    return new BackupClient(this.httpClient, this.id, backup);
  }

  database(database: string) {
    return new DatabaseClient(this.httpClient, this.id, database);
  }

  schedule(schedule: number) {
    return new ScheduleClient(this.httpClient, this.id, schedule);
  }

  subuser(subuser: string) {
    return new SubuserClient(this.httpClient, this.id, subuser);
  }

  info() {
    return this.httpClient.request<UserServer<UserServerAttributes>>(
      "GET",
      `/client/servers/${this.id}`,
    );
  }

  edit(options: EditServerArgs) {
    return this.httpClient.request<void, EditServerArgs>(
      "POST",
      `/client/servers/${this.id}/settings/rename`,
      renameServerSchema.parse(options),
    );
  }

  reinstall() {
    return this.httpClient.request<void>(
      "POST",
      `/client/servers/${this.id}/settings/reinstall`,
    );
  }
}

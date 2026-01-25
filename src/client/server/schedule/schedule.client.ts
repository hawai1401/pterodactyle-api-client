import type HttpClient from "../../../class/HttpClient.js";
import type {
  CreateScheduleArgs,
  EditScheduleArgs,
  Schedule,
  ScheduleList,
} from "./schedule.types.js";
import TaskClient from "./task/task.client.js";

export default class ScheduleClient {
  public task: TaskClient;

  constructor(private httpClient: HttpClient) {
    this.task = new TaskClient(httpClient);
  }

  async list(id: string) {
    const res = await this.httpClient.request<ScheduleList>(
      "GET",
      `/client/servers/${id}/schedules`,
    );
    return {
      ...res,
      data: res.data.map((schedule) => ({
        ...schedule,
        attributes: {
          ...schedule.attributes,
          last_run_at: schedule.attributes.last_run_at
            ? new Date(schedule.attributes.last_run_at)
            : null,
          next_run_at: new Date(schedule.attributes.next_run_at),
          created_at: new Date(schedule.attributes.created_at),
          updated_at: new Date(schedule.attributes.updated_at),
          relationships: {
            tasks: {
              ...schedule.attributes.relationships.tasks,
              data: schedule.attributes.relationships.tasks.data.map(
                (task) => ({
                  ...task,
                  attributes: {
                    ...task.attributes,
                    created_at: new Date(task.attributes.created_at),
                    updated_at: new Date(task.attributes.updated_at),
                  },
                }),
              ),
            },
          },
        },
      })),
    };
  }

  async info(id: string, schedule: number) {
    const res = await this.httpClient.request<Schedule<string>>(
      "GET",
      `/client/servers/${id}/schedules/${schedule}`,
    );
    return {
      ...res,
      attributes: {
        last_run_at: res.attributes.last_run_at
          ? new Date(res.attributes.last_run_at)
          : null,
        next_run_at: new Date(res.attributes.next_run_at),
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
        relationships: {
          tasks: {
            ...res.attributes.relationships.tasks,
            data: res.attributes.relationships.tasks.data.map((task) => ({
              ...task,
              attributes: {
                ...task.attributes,
                created_at: new Date(task.attributes.created_at),
                updated_at: new Date(task.attributes.updated_at),
              },
            })),
          },
        },
      },
    };
  }

  async create(
    id: string,
    {
      name,
      minute,
      hour,
      day_of_month,
      month,
      day_of_week,
      is_active,
      only_when_online,
    }: CreateScheduleArgs,
  ) {
    const res = await this.httpClient.request<
      Schedule<string>,
      CreateScheduleArgs
    >("POST", `/client/servers/${id}/schedules`, {
      name,
      minute,
      hour,
      day_of_month,
      month,
      day_of_week,
      is_active,
      only_when_online,
    });
    return {
      ...res,
      attributes: {
        last_run_at: res.attributes.last_run_at
          ? new Date(res.attributes.last_run_at)
          : null,
        next_run_at: new Date(res.attributes.next_run_at),
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
        relationships: {
          tasks: {
            ...res.attributes.relationships.tasks,
            data: res.attributes.relationships.tasks.data.map((task) => ({
              ...task,
              attributes: {
                ...task.attributes,
                created_at: new Date(task.attributes.created_at),
                updated_at: new Date(task.attributes.updated_at),
              },
            })),
          },
        },
      },
    };
  }

  edit(
    id: string,
    schedule: number,
    {
      name,
      minute,
      hour,
      day_of_month,
      month,
      day_of_week,
      is_active,
      only_when_online,
    }: EditScheduleArgs,
  ) {
    return this.httpClient.request<void, EditScheduleArgs>(
      "POST",
      `/client/servers/${id}/schedules/${schedule}`,
      {
        name,
        minute,
        hour,
        day_of_month,
        month,
        day_of_week,
        is_active,
        only_when_online,
      },
    );
  }

  delete(id: string, schedule: number) {
    return this.httpClient.request<void>(
      "DELETE",
      `/client/servers/${id}/schedules/${schedule}`,
    );
  }

  execute(id: string, schedule: number) {
    return this.httpClient.request<void>(
      "POST",
      `/client/servers/${id}/schedules/${schedule}/execute`,
    );
  }
}

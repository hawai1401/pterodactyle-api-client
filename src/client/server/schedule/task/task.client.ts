import type HttpClient from "../../../../class/HttpClient.js";
import type { TaskAction } from "../../server.types.js";
import type { ScheduleTask } from "../schedule.types.js";
import type { CreateScheduleTaskArgs } from "./task.types.js";

export default class TaskClient {
  constructor(private httpClient: HttpClient) {}

  list(id: string, schedule: number) {}

  async create<T extends TaskAction>(
    id: string,
    schedule: number,
    {
      action,
      continue_on_failure,
      payload,
      time_offset,
    }: CreateScheduleTaskArgs<T>,
  ) {
    const res = await this.httpClient.request<
      ScheduleTask<string>,
      CreateScheduleTaskArgs
    >("POST", `/client/servers/${id}/schedules/${schedule}/tasks`, {
      action,
      continue_on_failure,
      payload,
      time_offset,
    });
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }

  async edit<T extends TaskAction>(
    id: string,
    schedule: number,
    task: number,
    {
      action,
      continue_on_failure,
      payload,
      time_offset,
    }: CreateScheduleTaskArgs<T>,
  ) {
    const res = await this.httpClient.request<
      ScheduleTask<string>,
      CreateScheduleTaskArgs
    >("POST", `/client/servers/${id}/schedules/${schedule}/tasks/${task}`, {
      action,
      continue_on_failure,
      payload,
      time_offset,
    });
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }

  delete(id: string, schedule: number, task: number) {
    return this.httpClient.request<void>(
      "DELETE",
      `/client/servers/${id}/schedules/${schedule}/tasks/${task}`,
    );
  }
}

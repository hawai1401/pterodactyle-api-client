import HttpClient from "../../../class/HttpClient.js";
import type { ServerActivityList, ServerEvent } from "./activity.types.js";

export default class ActivityClient {
  constructor(private httpClient: HttpClient) {}

  async list<T extends ServerEvent>(
    id: string,
    {
      page,
      per_page,
      event,
    }: {
      page?: number | undefined;
      per_page?: number | undefined;
      event?: T | undefined;
    } = {},
  ): Promise<ServerActivityList<Date, T>> {
    const res = await this.httpClient.request<ServerActivityList<string, T>>(
      "GET",
      `/client/servers/${id}/activity?page=${page ?? 1}&per_page=${per_page ?? 50}${event ? `&filter[event]=${event}` : ""}`,
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
}

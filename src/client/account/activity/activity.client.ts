import type HttpClient from "../../../class/HttpClient.js";
import { accountActivityPaginationSchema } from "../account.schemas.js";
import type {
  AuthEvent,
  UserActivityList,
  UserEvent,
} from "./activity.types.js";

export default class ActivityClient {
  constructor(private httpClient: HttpClient) {}

  async list<T extends UserEvent | AuthEvent>({
    page,
    per_page,
    event,
  }: {
    page?: number | undefined;
    per_page?: number | undefined;
    event?: T | undefined;
  } = {}): Promise<UserActivityList<Date, T>> {
    const parsedValues = accountActivityPaginationSchema.parse({
      page,
      per_page,
      event,
    });
    const res = await this.httpClient.request<UserActivityList<string, T>>(
      "GET",
      `/client/account/activity?page=${parsedValues.page ?? 1}&per_page=${parsedValues.per_page ?? 50}${parsedValues.event ? `&filter[event]=${parsedValues.event}` : ""}`,
    );
    return {
      ...res,
      data: res.data.map((activity) => ({
        ...activity,
        attributes: {
          ...activity.attributes,
          timestamp: new Date(activity.attributes.timestamp),
        },
      })),
    };
  }
}

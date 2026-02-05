import z from "zod";
import type HttpClient from "../../class/HttpClient.js";
import {
  createLocationSchema,
  editLocationSchema,
  locationId,
} from "./location.schemas.js";
import type {
  CreateLocationArgs,
  EditLocationArgs,
  Location,
  LocationList,
} from "./location.types.js";

export default class LocationClient {
  constructor(private httpClient: HttpClient) {}

  async list() {
    const res = await this.httpClient.request<LocationList>(
      "GET",
      "/application/locations",
    );
    return {
      ...res,
      data: res.data.map((location) => ({
        ...location,
        attributes: {
          ...location.attributes,
          created_at: new Date(location.attributes.created_at),
          updated_at: new Date(location.attributes.updated_at),
        },
      })),
    };
  }

  async info(id: number) {
    const res = await this.httpClient.request<Location<string>>(
      "GET",
      `/application/locations/${locationId.parse(id)}`,
    );
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }

  async create(options: CreateLocationArgs) {
    const res = await this.httpClient.request<
      Location<string>,
      z.infer<typeof createLocationSchema>
    >("POST", `/application/locations`, createLocationSchema.parse(options));
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }

  async edit(id: number, options: EditLocationArgs) {
    const res = await this.httpClient.request<
      Location<string>,
      z.infer<typeof editLocationSchema>
    >(
      "PATCH",
      `/application/locations/${locationId.parse(id)}`,
      editLocationSchema.parse(options),
    );
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }

  delete(id: number) {
    return this.httpClient.request<void>(
      "DELETE",
      `/application/locations/${locationId.parse(id)}`,
    );
  }
}

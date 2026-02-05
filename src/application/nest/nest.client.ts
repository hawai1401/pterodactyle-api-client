import type HttpClient from "../../class/HttpClient.js";
import { nestId } from "./nest.schemas.js";
import type { Nest, NestList } from "./nest.types.js";

export default class NestClient {
  constructor(private httpClient: HttpClient) {}

  async list() {
    const res = await this.httpClient.request<NestList>(
      "GET",
      "/application/nests",
    );
    return {
      ...res,
      data: res.data.map((nest) => ({
        ...nest,
        attributes: {
          ...nest.attributes,
          created_at: new Date(nest.attributes.created_at),
          updated_at: new Date(nest.attributes.updated_at),
        },
      })),
    };
  }

  async info(id: number) {
    const res = await this.httpClient.request<Nest<string>>(
      "GET",
      `/application/nests/${nestId.parse(id)}`,
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
}

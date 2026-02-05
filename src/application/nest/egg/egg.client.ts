import type HttpClient from "../../../class/HttpClient.js";
import { nestEggId, nestId } from "../nest.schemas.js";
import type { Egg, EggList } from "./egg.types.js";

export default class EggClient {
  constructor(private httpClient: HttpClient) {}

  async list(id: number) {
    const res = await this.httpClient.request<EggList>(
      "GET",
      `/application/nests/${nestId.parse(id)}/eggs`,
    );
    return {
      ...res,
      data: res.data.map((egg) => ({
        ...egg.attributes,
        created_at: new Date(egg.attributes.created_at),
        updated_at: new Date(egg.attributes.updated_at),
      })),
    };
  }

  async info(id: number, egg: number) {
    const res = await this.httpClient.request<Egg<string>>(
      "GET",
      `/application/nests/${nestId.parse(id)}/eggs/${nestEggId.parse(egg)}`,
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

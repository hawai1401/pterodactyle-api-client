import type HttpClient from "../../../class/HttpClient.js";
import type { EditImageArgs } from "./image.types.js";

export default class ImageClient {
  constructor(private httpClient: HttpClient) {}

  edit(id: string, { docker_image }: EditImageArgs) {
    return this.httpClient.request<void, EditImageArgs>(
      "PUT",
      `/client/servers/${id}/settings/docker-image`,
      { docker_image },
    );
  }
}

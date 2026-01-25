export default class ImageClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    edit(id, { docker_image }) {
        return this.httpClient.request("PUT", `/client/servers/${id}/settings/docker-image`, { docker_image });
    }
}

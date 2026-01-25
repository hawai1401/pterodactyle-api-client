import z from "zod";
export default class AllocationClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    list(id) {
        return this.httpClient.request("GET", `/client/servers/${id}/network/allocations`);
    }
    assign(id, { ip, port }) {
        return this.httpClient.request("POST", `/client/servers/${id}/network/allocations`, { ip, port });
    }
    setPrimary(id, allocation) {
        return this.httpClient.request("POST", `/client/servers/${id}/network/allocations/${allocation}/primary`);
    }
    edit(id, allocation, args = {}) {
        const schema = z.object({
            notes: z.string().min(1).max(255).optional(),
        });
        const { notes } = schema.parse(args);
        return this.httpClient.request("POST", `/client/servers/${id}/network/allocations/${allocation}`, { notes });
    }
    delete(id, allocation) {
        return this.httpClient.request("DELETE", `/client/servers/${id}/network/allocations/${allocation}`);
    }
}

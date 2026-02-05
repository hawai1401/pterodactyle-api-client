import { allocationId, assignAllocationSchema, editAllocationSchema, userServerId, } from "../server.schemas.js";
import z from "zod";
export default class AllocationClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    list(id) {
        return this.httpClient.request("GET", `/client/servers/${userServerId.parse(id)}/network/allocations`);
    }
    assign(id, options) {
        return this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/network/allocations`, assignAllocationSchema.parse(options));
    }
    setPrimary(id, allocation) {
        return this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/network/allocations/${allocationId.parse(allocation)}/primary`);
    }
    edit(id, allocation, options = {}) {
        return this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/network/allocations/${allocationId.parse(allocation)}`, editAllocationSchema.parse(options));
    }
    delete(id, allocation) {
        return this.httpClient.request("DELETE", `/client/servers/${userServerId.parse(id)}/network/allocations/${allocationId.parse(allocation)}`);
    }
}

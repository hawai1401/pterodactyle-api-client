import type HttpClient from "../../../class/HttpClient.js";
import type { Allocation } from "../server.types.js";
import type {
  AllocationList,
  AssignAllocationArgs,
  EditAllocationArgs,
} from "./allocation.types.js";
import {
  allocationId,
  assignAllocationSchema,
  editAllocationSchema,
  userServerId,
} from "../server.schemas.js";
import z from "zod";

export default class AllocationClient {
  constructor(private httpClient: HttpClient) {}

  list(id: string) {
    return this.httpClient.request<AllocationList>(
      "GET",
      `/client/servers/${userServerId.parse(id)}/network/allocations`,
    );
  }

  assign(id: string, options: AssignAllocationArgs) {
    return this.httpClient.request<
      Allocation,
      z.infer<typeof assignAllocationSchema>
    >(
      "POST",
      `/client/servers/${userServerId.parse(id)}/network/allocations`,
      assignAllocationSchema.parse(options),
    );
  }

  setPrimary(id: string, allocation: number) {
    return this.httpClient.request<Allocation>(
      "POST",
      `/client/servers/${userServerId.parse(id)}/network/allocations/${allocationId.parse(allocation)}/primary`,
    );
  }

  edit(id: string, allocation: number, options: EditAllocationArgs = {}) {
    return this.httpClient.request<Allocation, EditAllocationArgs>(
      "POST",
      `/client/servers/${userServerId.parse(id)}/network/allocations/${allocationId.parse(allocation)}`,
      editAllocationSchema.parse(options),
    );
  }

  delete(id: string, allocation: number) {
    return this.httpClient.request<void>(
      "DELETE",
      `/client/servers/${userServerId.parse(id)}/network/allocations/${allocationId.parse(allocation)}`,
    );
  }
}

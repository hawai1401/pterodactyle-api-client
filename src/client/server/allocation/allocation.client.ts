import z from "zod";
import type HttpClient from "../../../class/HttpClient.js";
import type { Allocation } from "../server.types.js";
import type {
  AllocationList,
  AssignAllocationArgs,
  EditAllocationArgs,
} from "./allocation.types.js";

export default class AllocationClient {
  constructor(private httpClient: HttpClient) {}

  list(id: string) {
    return this.httpClient.request<AllocationList>(
      "GET",
      `/client/servers/${id}/network/allocations`,
    );
  }

  assign(id: string, { ip, port }: AssignAllocationArgs) {
    return this.httpClient.request<Allocation, AssignAllocationArgs>(
      "POST",
      `/client/servers/${id}/network/allocations`,
      { ip, port },
    );
  }

  setPrimary(id: string, allocation: number) {
    return this.httpClient.request<Allocation>(
      "POST",
      `/client/servers/${id}/network/allocations/${allocation}/primary`,
    );
  }

  edit(id: string, allocation: number, args: EditAllocationArgs = {}) {
    const schema = z.object({
      notes: z.string().min(1).max(255).optional(),
    });
    const { notes } = schema.parse(args);
    return this.httpClient.request<Allocation, EditAllocationArgs>(
      "POST",
      `/client/servers/${id}/network/allocations/${allocation}`,
      { notes },
    );
  }

  delete(id: string, allocation: number) {
    return this.httpClient.request<void>(
      "DELETE",
      `/client/servers/${id}/network/allocations/${allocation}`,
    );
  }
}

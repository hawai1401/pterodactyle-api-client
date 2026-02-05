import z from "zod";
import AllocationClient from "./allocation/allocation.client.js";
import { createNodeSchema, nodeId } from "./node.schemas.js";
export default class NodeClient {
    httpClient;
    allocation;
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.allocation = new AllocationClient(httpClient);
    }
    async list() {
        const res = await this.httpClient.request("GET", "/application/nodes");
        return {
            ...res,
            date: res.data.map((node) => ({
                ...node,
                attributes: {
                    ...node.attributes,
                    created_at: new Date(node.attributes.created_at),
                    updated_at: new Date(node.attributes.updated_at),
                },
            })),
        };
    }
    async info(id) {
        const res = await this.httpClient.request("GET", `/application/nodes/${nodeId.parse(id)}`);
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    async create(options) {
        const res = await this.httpClient.request("POST", "/application/nodes", createNodeSchema.parse(options));
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    async edit(id, options) {
        const res = await this.httpClient.request("PATCH", `/application/nodes/${nodeId.parse(id)}`, createNodeSchema.parse(options));
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    configuration(id) {
        return this.httpClient.request("GET", `/application/nodes/${nodeId.parse(id)}/configuration`);
    }
    delete(id) {
        return this.httpClient.request("DELETE", `/application/nodes/${nodeId.parse(id)}`);
    }
}

import z from "zod";
import { createLocationSchema, editLocationSchema, locationId, } from "./location.schemas.js";
export default class LocationClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list() {
        const res = await this.httpClient.request("GET", "/application/locations");
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
    async info(id) {
        const res = await this.httpClient.request("GET", `/application/locations/${locationId.parse(id)}`);
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
        const res = await this.httpClient.request("POST", `/application/locations`, createLocationSchema.parse(options));
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
        const res = await this.httpClient.request("PATCH", `/application/locations/${locationId.parse(id)}`, editLocationSchema.parse(options));
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    delete(id) {
        return this.httpClient.request("DELETE", `/application/locations/${locationId.parse(id)}`);
    }
}

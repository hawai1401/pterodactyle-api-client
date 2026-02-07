import z from "zod";
import { createUserSchema, externalUserId, userId } from "./user.schemas.js";
export default class UserClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list({ includeServers, } = {}) {
        const res = await this.httpClient.request("GET", `/application/users${includeServers ? "?include=servers" : ""}`);
        return includeServers
            ? {
                ...res,
                data: res.data.map((user) => ({
                    ...user,
                    attributes: {
                        ...user.attributes,
                        created_at: new Date(user.attributes.created_at),
                        updated_at: new Date(user.attributes.updated_at),
                        relationships: {
                            ...user.attributes
                                .relationships,
                            servers: {
                                ...user.attributes
                                    .relationships.servers,
                                ...user.attributes.relationships.servers.data.map((server) => ({
                                    ...server,
                                    attributes: {
                                        ...server.attributes,
                                    },
                                })),
                            },
                        },
                    },
                })),
            }
            : {
                ...res,
                data: res.data.map((user) => ({
                    ...user,
                    attributes: {
                        ...user.attributes,
                        created_at: new Date(user.attributes.created_at),
                        updated_at: new Date(user.attributes.updated_at),
                    },
                })),
            };
    }
    async info({ id, external_id, }, { includeServers } = {}) {
        if (id) {
            const res = await this.httpClient.request("GET", `/application/users/${userId.parse(id)}${includeServers ? "?include=servers" : ""}`);
            return {
                ...res,
                attributes: {
                    ...res.attributes,
                    created_at: new Date(res.attributes.created_at),
                    updated_at: new Date(res.attributes.updated_at),
                },
            };
        }
        else if (external_id) {
            const res = await this.httpClient.request("GET", `/application/users/external/${externalUserId.parse(external_id)}${includeServers ? "?include=servers" : ""}`);
            return {
                ...res,
                attributes: {
                    ...res.attributes,
                    created_at: new Date(res.attributes.created_at),
                    updated_at: new Date(res.attributes.updated_at),
                },
            };
        }
        else
            throw new Error("Vous devez spécifier au moins un des 2 paramètres de recherche d'un utilisateur !");
    }
    create(args) {
        return this.httpClient.request("POST", "/application/users", createUserSchema.parse(args));
    }
    edit(id, args) {
        return this.httpClient.request("PATCH", `/application/users/${userId.parse(id)}`, createUserSchema.parse(args));
    }
    delete(id) {
        return this.httpClient.request("DELETE", `/application/users/${userId.parse(id)}`);
    }
}

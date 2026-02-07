import z from "zod";
import type HttpClient from "../../class/HttpClient.js";
import { createUserSchema, externalUserId, userId } from "./user.schemas.js";
import type {
  CreateUserArgs,
  User,
  UserAttributes,
  UserList,
  UserWithServersAttributes,
} from "./user.types.js";

export default class UserClient {
  constructor(private httpClient: HttpClient) {}

  async list<T extends boolean | undefined>({
    includeServers,
  }: { includeServers?: T } = {}) {
    const res = await this.httpClient.request<
      UserList<
        T extends true ? UserWithServersAttributes : UserAttributes<string>
      >
    >("GET", `/application/users${includeServers ? "?include=servers" : ""}`);
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
                ...(user as User<UserWithServersAttributes>).attributes
                  .relationships,
                servers: {
                  ...(user as User<UserWithServersAttributes>).attributes
                    .relationships.servers,
                  ...(
                    user as User<UserWithServersAttributes>
                  ).attributes.relationships.servers.data.map((server) => ({
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

  async info<T extends boolean | undefined>(
    {
      id,
      external_id,
    }: { id?: number | undefined; external_id?: string | undefined },
    { includeServers }: { includeServers?: T } = {},
  ) {
    if (id) {
      const res = await this.httpClient.request<
        User<
          T extends true ? UserWithServersAttributes : UserAttributes<string>
        >
      >(
        "GET",
        `/application/users/${userId.parse(id)}${includeServers ? "?include=servers" : ""}`,
      );
      return {
        ...res,
        attributes: {
          ...res.attributes,
          created_at: new Date(res.attributes.created_at),
          updated_at: new Date(res.attributes.updated_at),
        },
      };
    } else if (external_id) {
      const res = await this.httpClient.request<
        User<
          T extends true ? UserWithServersAttributes : UserAttributes<string>
        >
      >(
        "GET",
        `/application/users/external/${externalUserId.parse(external_id)}${includeServers ? "?include=servers" : ""}`,
      );
      return {
        ...res,
        attributes: {
          ...res.attributes,
          created_at: new Date(res.attributes.created_at),
          updated_at: new Date(res.attributes.updated_at),
        },
      };
    } else
      throw new Error(
        "Vous devez spécifier au moins un des 2 paramètres de recherche d'un utilisateur !",
      );
  }

  create(args: CreateUserArgs) {
    return this.httpClient.request<
      User<UserAttributes<string>>,
      z.infer<typeof createUserSchema>
    >("POST", "/application/users", createUserSchema.parse(args));
  }

  edit(id: number, args: CreateUserArgs) {
    return this.httpClient.request<
      User<UserAttributes<string>>,
      z.infer<typeof createUserSchema>
    >(
      "PATCH",
      `/application/users/${userId.parse(id)}`,
      createUserSchema.parse(args),
    );
  }

  delete(id: number) {
    return this.httpClient.request<void>(
      "DELETE",
      `/application/users/${userId.parse(id)}`,
    );
  }
}

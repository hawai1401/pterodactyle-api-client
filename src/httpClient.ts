import type { BaseArgs, role } from "./index.js";

export class PterodactyleAPIError<T> extends Error {
  constructor(
    readonly status: number,
    readonly message: string,
    readonly path: string,
    readonly body?: T | null,
  ) {
    super(message);
  }
}

export type method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export default class HttpClient {
  constructor(
    private baseURL: URL,
    private apiKey: string,
  ) {}

  async request<
    T,
    U extends BaseArgs | undefined = undefined,
    V extends method = method,
  >(
    method: V,
    path: string,
    body?: V extends "GET" ? null : V extends "DELETE" ? null : U,
  ): Promise<T> {
    const res = await fetch(new URL(`api${path}`, this.baseURL), {
      method,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (!res.ok) {
      throw new PterodactyleAPIError<U>(
        res.status,
        await res.text(),
        path,
        body,
      );
    }

    return res.json() as Promise<T>;
  }
}

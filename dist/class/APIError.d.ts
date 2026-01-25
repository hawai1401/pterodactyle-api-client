export declare class PterodactylAPIError<T> extends Error {
    readonly status: number;
    readonly message: string;
    readonly path: string;
    readonly body?: (T | null) | undefined;
    constructor(status: number, message: string, path: string, body?: (T | null) | undefined);
}
//# sourceMappingURL=APIError.d.ts.map
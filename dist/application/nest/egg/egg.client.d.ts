import type HttpClient from "../../../class/HttpClient.js";
export default class EggClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list(id: number): Promise<{
        data: {
            created_at: Date;
            updated_at: Date;
            id: number;
            uuid: string;
            name: string;
            nest: number;
            author: string;
            description: string;
            docker_image: string;
            docker_images: {
                [key: string]: string;
            };
            config: {
                files: {
                    [key: string]: unknown;
                };
                startup: {
                    [key: string]: unknown;
                };
                stop: string;
                logs: unknown;
                file_denylist: unknown;
                extends: null;
            };
            startup: string;
            script: {
                privileged: boolean;
                install: string;
                entry: string;
                container: string;
                extends: null;
            };
        }[];
        object: "list";
    }>;
    info(id: number, egg: number): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            uuid: string;
            name: string;
            nest: number;
            author: string;
            description: string;
            docker_image: string;
            docker_images: {
                [key: string]: string;
            };
            config: {
                files: {
                    [key: string]: unknown;
                };
                startup: {
                    [key: string]: unknown;
                };
                stop: string;
                logs: unknown;
                file_denylist: unknown;
                extends: null;
            };
            startup: string;
            script: {
                privileged: boolean;
                install: string;
                entry: string;
                container: string;
                extends: null;
            };
        };
        object: "egg";
    }>;
}
//# sourceMappingURL=egg.client.d.ts.map
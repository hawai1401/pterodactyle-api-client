import z from "zod";
export declare const nodeId: z.ZodNumber;
export declare const createNodeSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    location_id: z.ZodNumber;
    fqdn: z.ZodString;
    scheme: z.ZodEnum<{
        https: "https";
        http: "http";
    }>;
    behind_proxy: z.ZodOptional<z.ZodBoolean>;
    public: z.ZodOptional<z.ZodBoolean>;
    daemon_base: z.ZodOptional<z.ZodString>;
    daemon_sftp: z.ZodNumber;
    daemon_listen: z.ZodNumber;
    memory: z.ZodNumber;
    memory_overallocate: z.ZodNumber;
    disk: z.ZodNumber;
    disk_overallocate: z.ZodNumber;
    upload_size: z.ZodOptional<z.ZodNumber>;
    maintenance_mode: z.ZodOptional<z.ZodBoolean>;
}, z.z.core.$strip>;
//# sourceMappingURL=node.schemas.d.ts.map
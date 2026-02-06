import z from "zod";
export declare const applicationServerId: z.ZodNumber;
export declare const applicationServerExternalId: z.ZodString;
export declare const applicationServerDatabaseId: z.ZodNumber;
export declare const createServerSchema: z.ZodObject<{
    external_id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    user: z.ZodNumber;
    egg: z.ZodNumber;
    docker_image: z.ZodString;
    startup: z.ZodString;
    environment: z.ZodRecord<z.ZodString, z.ZodString>;
    skip_scripts: z.ZodOptional<z.ZodBoolean>;
    oom_disabled: z.ZodOptional<z.ZodBoolean>;
    limits: z.ZodObject<{
        memory: z.ZodNumber;
        swap: z.ZodNumber;
        disk: z.ZodNumber;
        io: z.ZodNumber;
        threads: z.ZodOptional<z.ZodString>;
        cpu: z.ZodNumber;
    }, z.z.core.$strip>;
    feature_limits: z.ZodObject<{
        databases: z.ZodNumber;
        backups: z.ZodNumber;
        allocations: z.ZodOptional<z.ZodNumber>;
    }, z.z.core.$strip>;
    allocation: z.ZodObject<{
        default: z.ZodNumber;
        additional: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.z.core.$strip>;
    start_on_completion: z.ZodOptional<z.ZodBoolean>;
}, z.z.core.$strip>;
export declare const editApplicationServerDetailsSchema: z.ZodObject<{
    name: z.ZodString;
    user: z.ZodNumber;
    external_id: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
export declare const editApplicationServerConfigurationSchema: z.ZodObject<{
    allocation: z.ZodNumber;
    oom_disabled: z.ZodOptional<z.ZodBoolean>;
    limits: z.ZodObject<{
        memory: z.ZodOptional<z.ZodNumber>;
        swap: z.ZodOptional<z.ZodNumber>;
        disk: z.ZodOptional<z.ZodNumber>;
        io: z.ZodOptional<z.ZodNumber>;
        threads: z.ZodOptional<z.ZodString>;
        cpu: z.ZodOptional<z.ZodNumber>;
    }, z.z.core.$strip>;
    feature_limits: z.ZodOptional<z.ZodObject<{
        databases: z.ZodNumber;
        backups: z.ZodNumber;
        allocations: z.ZodOptional<z.ZodNumber>;
    }, z.z.core.$strip>>;
    add_allocations: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    remove_allocations: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.z.core.$strip>;
export declare const editApplicationServerStartupSchema: z.ZodObject<{
    startup: z.ZodString;
    environment: z.ZodRecord<z.ZodString, z.ZodString>;
    egg: z.ZodNumber;
    image: z.ZodString;
    skip_scripts: z.ZodBoolean;
}, z.z.core.$strip>;
export declare const createApplicationDatabaseSchema: z.ZodObject<{
    database: z.ZodString;
    remote: z.ZodString;
    host: z.ZodNumber;
}, z.z.core.$strip>;
//# sourceMappingURL=server.schemas.d.ts.map
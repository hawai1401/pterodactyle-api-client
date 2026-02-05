import z from "zod";
export const nodeId = z.number();
export const createNodeSchema = z.object({
    name: z.string().min(1).max(191),
    description: z.string().optional(),
    location_id: z.number(),
    fqdn: z.string().min(1).max(191),
    scheme: z.enum(["https", "http"]),
    behind_proxy: z.boolean().optional(),
    public: z.boolean().optional(),
    daemon_base: z.string().optional(),
    daemon_sftp: z.number(),
    daemon_listen: z.number(),
    memory: z.number(),
    memory_overallocate: z.number(),
    disk: z.number(),
    disk_overallocate: z.number(),
    upload_size: z.number().optional(),
    maintenance_mode: z.boolean().optional(),
});

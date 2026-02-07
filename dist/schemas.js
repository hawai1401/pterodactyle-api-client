import z from "zod";
export const idSchema = z.int().positive();
export const uuidSchema = z.uuidv4();
export const nameSchema = z.string().min(1).max(191);
export const descriptionSchema = z.string().optional();
export const dateSchema = z.date();
export const paginationSchema = z.object({
    page: z.coerce.number().optional(),
    per_page: z.coerce.number().min(1).max(100).optional(),
    sort: z
        .object({
        timestamp: z.literal(["ascending", "descending"]).optional(),
    })
        .optional(),
});
export const clientSchema = z.object({
    apiKey: z.string().startsWith("ptlc_").or(z.string().startsWith("ptla_")),
    panelUrl: z.url(),
    role: z.enum(["user", "admin"]),
});

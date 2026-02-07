import z from "zod";
import { idSchema, nameSchema } from "../../schemas.js";
export const userId = idSchema;
export const externalUserId = nameSchema;
export const createUserSchema = z.object({
    email: z.email().min(1).max(191),
    username: z.string().min(1).max(191),
    first_name: z.string().min(1).max(191),
    last_name: z.string().min(1).max(191),
    password: z.string().min(8).optional(),
    language: z.string().optional(),
    root_admin: z.boolean().optional(),
    external_id: z.string().min(1).max(191).optional(),
});

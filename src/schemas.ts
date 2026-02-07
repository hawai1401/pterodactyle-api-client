import z from "zod";

export const idSchema = z.int().positive();
export const uuidSchema = z.string().uuid();
export const nameSchema = z.string().min(1).max(191);
export const descriptionSchema = z.string().optional();
export const dateSchema = z.date();

export const paginationSchema = z.object({
  page: z.coerce.number<number>().optional(),
  per_page: z.coerce.number<number>().min(1).max(100).optional(),
  sort: z
    .object({
      timestamp: z.literal(["ascending", "descending"]).optional(),
    })
    .optional(),
});

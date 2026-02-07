import z from "zod";
export declare const idSchema: z.ZodInt;
export declare const uuidSchema: z.ZodUUID;
export declare const nameSchema: z.ZodString;
export declare const descriptionSchema: z.ZodOptional<z.ZodString>;
export declare const dateSchema: z.ZodDate;
export declare const paginationSchema: z.ZodObject<{
    page: z.ZodOptional<z.z.ZodCoercedNumber<number>>;
    per_page: z.ZodOptional<z.z.ZodCoercedNumber<number>>;
    sort: z.ZodOptional<z.ZodObject<{
        timestamp: z.ZodOptional<z.ZodLiteral<"ascending" | "descending">>;
    }, z.z.core.$strip>>;
}, z.z.core.$strip>;
export declare const clientSchema: z.ZodObject<{
    apiKey: z.ZodUnion<[z.ZodString, z.ZodString]>;
    panelUrl: z.ZodURL;
    role: z.ZodEnum<{
        user: "user";
        admin: "admin";
    }>;
}, z.z.core.$strip>;
//# sourceMappingURL=schemas.d.ts.map
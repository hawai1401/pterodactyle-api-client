import z from "zod";

export const applicationServerId = z.number();
export const applicationServerExternalId = z.string().min(1).max(191);
export const applicationServerDatabaseId = z.number();

export const createServerSchema = z.object({
  external_id: applicationServerExternalId.optional(),
  name: z.string().min(1).max(191),
  description: z.string().optional(),
  user: z.number(),
  egg: z.number(),
  docker_image: z
    .string()
    .max(191)
    .regex(/^~?[\w\.\/\-:@ ]*$/),
  startup: z.string(),
  environment: z.record(z.string().uppercase(), z.string()),
  skip_scripts: z.boolean().optional(),
  oom_disabled: z.boolean().optional(),
  limits: z.object({
    memory: z.number().min(0),
    swap: z.number().min(-1),
    disk: z.number().min(0),
    io: z.number().min(10).max(1000),
    threads: z
      .string()
      .regex(/^[0-9-,]+$/)
      .optional(),
    cpu: z.number().min(0),
  }),
  feature_limits: z.object({
    databases: z.number().min(0),
    backups: z.number().min(0),
    allocations: z.number().min(0).optional(),
  }),
  allocation: z.object({
    default: z.number(),
    additional: z.array(z.number()).optional(),
  }),
  start_on_completion: z.boolean().optional(),
});

export const editApplicationServerDetailsSchema = z.object({
  name: z.string().min(1).max(191),
  user: z.number(),
  external_id: applicationServerExternalId.optional(),
  description: z.string().optional(),
});

export const editApplicationServerConfigurationSchema = z.object({
  allocation: z.number(),
  oom_disabled: z.boolean().optional(),
  limits: z.object({
    memory: z.number().min(0).optional(),
    swap: z.number().min(-1).optional(),
    disk: z.number().min(0).optional(),
    io: z.number().min(10).max(1000).optional(),
    threads: z
      .string()
      .regex(/^[0-9-,]+$/)
      .optional(),
    cpu: z.number().min(0).optional(),
  }),
  feature_limits: z
    .object({
      databases: z.number().min(0),
      backups: z.number().min(0),
      allocations: z.number().min(0).optional(),
    })
    .optional(),
  add_allocations: z.number().array().optional(),
  remove_allocations: z.number().array().optional(),
});

export const editApplicationServerStartupSchema = z.object({
  startup: z.string(),
  environment: z.record(z.string().uppercase(), z.string()),
  egg: z.number(),
  image: z
    .string()
    .max(191)
    .regex(/^~?[\w\.\/\-:@ ]*$/),
  skip_scripts: z.boolean(),
});

export const createApplicationDatabaseSchema = z.object({
  database: z.string().min(1).max(48),
  remote: z.string().regex(/^[0-9%.]{1,15}$/),
  host: z.number(),
});

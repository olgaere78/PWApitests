import { z } from 'zod';

export const productDataSchema = z.object({
    name: z.string().optional(),
    price: z.number(),
    category: z.string(),
    in_stock: z.boolean()
});

export const productRecordSchema = z.object({
  id: z.string(),
  collection_id: z.string(),
  project_id: z.number(),

  app_user_id: z.number().nullable(),

  created_by: z.number(),

  created_at: z.string(),
  updated_at: z.string(),

  deleted_at: z.string().nullable(),

  data: productDataSchema,
});

export const productsResponseSchema = z.object({
  data: z.array(productRecordSchema),
  meta: z.object({
    page: z.number(),
    limit: z.number(),
    total: z.number(),
    pages: z.number(),
  }),
});

export type ProductsResponse =
  z.infer<typeof productsResponseSchema>;
import { z } from 'zod';

const inventoryValidationSchema = z.object({
  quantity: z
    .number()
    .int()
    .nonnegative('quantity can not be negative')
    .min(1, 'quantity is required'),
  inStock: z.boolean(),
});

const variantValidationSchema = z.object({
  type: z.string().min(1, 'type is required'),
  value: z.string().min(1, 'value is required'),
});

export const productsValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is requiered'),
  price: z.number().min(1, 'Price is required'),
  category: z.string().min(1, 'Category is required'),
  variant: z.array(variantValidationSchema).min(1, 'variants are required'),
  inventory: inventoryValidationSchema,
});

export const productsValidationSchemaForUpdate =
  productsValidationSchema.partial();

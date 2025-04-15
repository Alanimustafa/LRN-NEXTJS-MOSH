import { z } from "zod";

const productSchema = z.object({
  name: z.string().min(3).max(50),
  description: z.string().optional(),
  price: z.number().positive(),
  createdAt: z.date().optional(),
});

export default productSchema;
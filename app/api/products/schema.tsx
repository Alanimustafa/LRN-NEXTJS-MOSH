import { z } from "zod";

const productSchema = z.object({
  name: z.string().min(3).max(50),
  price: z.number().positive(),
  description: z.string().optional(),
  category: z.string().optional(),
  email: z.string().email().optional(),
  url: z.string().url().optional(),
});

export default productSchema;
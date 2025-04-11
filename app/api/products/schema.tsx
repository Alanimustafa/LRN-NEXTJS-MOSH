import { z } from "zod";

const schema = z.object({
  name: z.string().min(3).max(50),
  price: z.number().positive(),
  description: z.string().optional(),
  category: z.string().optional(),
});

export default schema;
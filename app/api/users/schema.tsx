import { z } from "zod";

const userSchema = z.object({
  id: z.string().min(3).max(10),
  email: z.string().email().optional(),
  name: z.string().min(3).max(50),
  followers: z.number().optional(),
  isActive: z.boolean().default(true),
  registeredAt: z.date().default(() => new Date())
})

export default userSchema;

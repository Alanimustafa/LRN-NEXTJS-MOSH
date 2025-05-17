import { z } from "zod";

const userSchema = z.object({
  email: z.string().email().optional(),
  name: z.string().min(3).max(50),
  username: z.string().min(3).max(20),
  followers: z.number().min(1).optional(),
  isActive: z.boolean().default(true),
  registeredAt: z.date().default(() => new Date())
})

export default userSchema;

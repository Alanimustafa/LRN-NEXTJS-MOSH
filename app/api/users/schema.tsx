import { z } from "zod";

const schema = z.object({
  id: z.string().min(3).max(10),
})

export default schema;

import { z } from "zod";

export const deleteBlockListSchema = z.object({
  ids: z.array(z.string()),
});

export type deleteBlockListSchemaSchemaType = z.infer<
  typeof deleteBlockListSchema
>;

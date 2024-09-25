"use server";

import { actionClient } from "@/lib/safe-action";
import { deleteBlockListSchema } from "./delete-block-list.schema";
import { deleteBlocks } from "@/app/api/block/deleteBlocks";
import { revalidatePath } from "next/cache";

export const deleteBlockListAction = actionClient
  .schema(deleteBlockListSchema)
  .action(async ({ parsedInput: { ids } }) => {
    try {
      const response = await deleteBlocks(ids);
      const blocks = await response.json();

      return blocks;
    } catch {
      throw new Error("Failed to retrieve last blocks");
    } finally {
      revalidatePath("/blocks", "page");
    }
  });

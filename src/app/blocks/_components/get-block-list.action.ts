"use server";

import { getLastBlocks } from "@/app/api/block/getLastBlocks";
import { createLastBlock } from "@/app/api/cron/route";
import { actionClient } from "@/lib/safe-action";

export const getBlockListAction = actionClient.action(async () => {
  try {
    await createLastBlock(); // Check if a new block is availble and create it
    const response = await getLastBlocks();
    const blocks = await response.json();

    return blocks;
  } catch {
    throw new Error("Failed to retrieve last blocks");
  }
});

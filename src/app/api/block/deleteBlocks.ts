import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function deleteBlocks(ids: string[]) {
  try {
    const blocks = await prisma.block.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    return NextResponse.json(blocks);
  } catch {
    return NextResponse.json(
      { error: "Failed to delete blocks" },
      { status: 500 }
    );
  }
}

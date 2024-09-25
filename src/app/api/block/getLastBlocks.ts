import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function getLastBlocks() {
  try {
    const blocks = await prisma.block.findMany({
      select: {
        id: true,
        size: true,
        number: true,
        timestamp: true,
        nonce: true,
        gasLimit: true,
        hash: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(blocks);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch blocks" },
      { status: 500 }
    );
  }
}

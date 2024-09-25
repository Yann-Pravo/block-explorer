import { NextResponse } from "next/server";
import { getLastBlockFromInfura } from "../block/getLastBlockFromInfura";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const response = await getLastBlockFromInfura();
    const lastBlock = await response.json();

    if (lastBlock.result) {
      const { size, number, timestamp, nonce, gasLimit, hash } =
        lastBlock.result;

      const alreadyExists = await prisma.block.findFirst({
        where: { hash },
      });

      if (alreadyExists) {
        return NextResponse.json(alreadyExists);
      } else {
        const newBlock = await prisma.block.create({
          data: {
            size,
            number,
            timestamp,
            nonce,
            gasLimit,
            hash,
          },
        });

        return NextResponse.json(newBlock);
      }
    } else {
      return new Error();
    }
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch blocks" },
      { status: 500 }
    );
  }
}

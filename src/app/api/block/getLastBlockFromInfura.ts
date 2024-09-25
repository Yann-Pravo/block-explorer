import { NextResponse } from "next/server";

export async function getLastBlockFromInfura() {
  try {
    const reponse = await fetch(
      `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "eth_getBlockByNumber",
          params: ["latest", false],
          id: 1,
        }),
      }
    );

    const lastBlock = await reponse.json();
    return NextResponse.json(lastBlock);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch blocks" },
      { status: 500 }
    );
  }
}

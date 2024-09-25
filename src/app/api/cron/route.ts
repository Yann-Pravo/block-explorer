import { createLastBlock } from "../block/createLastBlock";

export async function GET() {
  return await createLastBlock();
}

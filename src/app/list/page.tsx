import { getLastBlocks } from "../api/block/getLastBlocks";

export default async function RoutePage() {
  const res = await getLastBlocks();
  const lastBlocks = await res.json();

  return <div>nb blocks: {lastBlocks.length}</div>;
}

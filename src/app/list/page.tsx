import { Block } from "@prisma/client";
import { getLastBlocks } from "../api/block/getLastBlocks";

export default async function RoutePage() {
  const res = await getLastBlocks();
  const lastBlocks = await res.json();

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md w-2xl">
      <ul role="list" className="divide-y divide-gray-200">
        {lastBlocks.map((block: Block) => (
          <li key={block.id} className="px-4 py-4 sm:px-6">
            <div>
              <span className="text-stone-400">Size:</span>{" "}
              <span className="">{block.size}</span>
            </div>
            <div>
              <span className="text-stone-400">Number:</span>{" "}
              <span className="">{block.number}</span>
            </div>
            <div>
              <span className="text-stone-400">Timestamp:</span>{" "}
              <span className="">{block.timestamp}</span>
            </div>
            <div>
              <span className="text-stone-400">Nonce:</span>{" "}
              <span className="">{block.nonce}</span>
            </div>
            <div>
              <span className="text-stone-400">GasLimit:</span>{" "}
              <span className="">{block.gasLimit}</span>
            </div>
            <div>
              <span className="text-stone-400">Hash:</span>{" "}
              <span className="">{block.hash}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

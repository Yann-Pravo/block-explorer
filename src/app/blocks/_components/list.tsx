"use client";

import { Block } from "@prisma/client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { getBlockListAction } from "./get-block-list.action";
import { deleteBlockListAction } from "./delete-block-list.action";
import { cn } from "@/lib/utils";
import { format, fromUnixTime } from "date-fns";

type ListProps = {
  items: Block[];
};

export const List = ({ items }: ListProps) => {
  const checkbox = useRef<HTMLInputElement>(null);
  const [blocks, setBlocks] = useState(items);
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedBlocks, setSelectedBlocks] = useState<string[]>([]);
  const [formatSize, setFormatSize] = useState(false);
  const [formatNumber, setFormatNumber] = useState(false);
  const [formatGasLimit, setFormatGasLimit] = useState(false);
  const [formatTime, setFormatTime] = useState(false);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedBlocks.length > 0 && selectedBlocks.length < blocks.length;
    setChecked(selectedBlocks.length === blocks.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [blocks.length, selectedBlocks]);

  function toggleAll() {
    setSelectedBlocks(
      checked || indeterminate ? [] : blocks.map((block) => block.id)
    );
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  const deleteBlocks = async () => {
    setIsLoading(true);
    await deleteBlockListAction({ ids: selectedBlocks });
    setBlocks(blocks.filter((block) => !selectedBlocks.includes(block.id)));
    setChecked(false);
    setIndeterminate(false);
    setSelectedBlocks([]);
    setIsLoading(false);
  };

  const refetchBlocks = async () => {
    const res = await getBlockListAction();
    if (res?.data) {
      setBlocks(res?.data);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      refetchBlocks();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white rounded flex-grow">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Blocks
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of blocks from Ethereum Holesky network from Infura api
          </p>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="relative">
              {selectedBlocks.length > 0 && (
                <div className="absolute left-14 top-0 flex h-12 items-center sm:left-12">
                  <button
                    onClick={deleteBlocks}
                    type="button"
                    className={cn(
                      "inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white",
                      { disabled: isLoading }
                    )}
                  >
                    {isLoading ? "Deleting..." : "Delete"}
                  </button>
                </div>
              )}
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Hash
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-blue-600 hover:cursor-pointer"
                      onClick={() => setFormatSize(!formatSize)}
                    >
                      Size
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-blue-600 hover:cursor-pointer"
                      onClick={() => setFormatNumber(!formatNumber)}
                    >
                      Number
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-blue-600 hover:cursor-pointer"
                      onClick={() => setFormatTime(!formatTime)}
                    >
                      Timestamp
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Nonce
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-blue-600 hover:cursor-pointer"
                      onClick={() => setFormatGasLimit(!formatGasLimit)}
                    >
                      Gas limit
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {blocks.map((block) => (
                    <tr
                      key={block.id}
                      className={
                        selectedBlocks.includes(block.id)
                          ? "bg-gray-50"
                          : undefined
                      }
                    >
                      <td className="relative px-7 sm:w-12 sm:px-6">
                        {selectedBlocks.includes(block.id) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          value={block.id}
                          checked={selectedBlocks.includes(block.id)}
                          onChange={(e) =>
                            setSelectedBlocks(
                              e.target.checked
                                ? [...selectedBlocks, block.id]
                                : selectedBlocks.filter((b) => b !== block.id)
                            )
                          }
                        />
                      </td>
                      <td
                        className={cn(
                          "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                          selectedBlocks.includes(block.id)
                            ? "text-indigo-600"
                            : "text-gray-900"
                        )}
                      >
                        {block.hash}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {formatSize ? parseInt(block.size) : block.size}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {formatNumber ? parseInt(block.number) : block.number}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {formatTime
                          ? format(
                              fromUnixTime(parseInt(block.timestamp)),
                              "dd/MM/yyyy k:mm"
                            )
                          : block.timestamp}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {block.nonce}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {formatGasLimit
                          ? parseInt(block.gasLimit)
                          : block.gasLimit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

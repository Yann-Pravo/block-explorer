export default function Loading() {
  return (
    <div
      role="status"
      className="p-4 md:p-6 flex-grow bg-white space-y-4 border border-gray-200 rounded shadow animate-pulse"
    >
      <div className="mb-10">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-52 mb-2.5" />
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-40 mb-2.5" />
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
        </div>
        <div className="flex items-center justify-between pt-4">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-40 mb-2.5" />
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
        </div>
        <div className="flex items-center justify-between pt-4">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-40 mb-2.5" />
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
        </div>
        <div className="flex items-center justify-between pt-4">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-40 mb-2.5" />
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
        </div>
        <div className="flex items-center justify-between pt-4">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-40 mb-2.5" />
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

const TimelinePage = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-between bg-zinc-50 font-sans text-gray-800">
      <div className="container mx-auto flex flex-col justify-start items-start gap-8 w-full mt-10">
        <div>
          <h2 className="text-4xl font-bold">Timeline </h2>
        </div>

        <div className="container mx-auto flex justify-start items-start w-full ">
          <div className="relative w-full max-w-xs">
            <select
              placeholder=""
              defaultValue=""
              className="input input-success shadow w-full appearance-none pr-10"
            >
              <option value="" disabled hidden>
                Filter timeline
              </option>
              <option value="all">All</option>
              <option value="recent">Recent</option>
              <option value="older">Older</option>
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;





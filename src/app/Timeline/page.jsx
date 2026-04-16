"use client";
import { EventContext } from "@/context/EventContext";
import friends from "../../../public/friends.json";
import { useContext } from "react";
import Image from "next/image";
import text from "@/assets/elements/text.png";
import video from "@/assets/elements/video.png";
import call from "@/assets/elements/call.png";

const TimelinePage = () => {
  const { eventsList } = useContext(EventContext);

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans text-gray-800 h-full">
      <div className="container mx-auto flex w-full flex-col items-start justify-start gap-5 px-4 py-6 sm:gap-8 sm:px-6 sm:py-8 lg:px-8">
        <div className="w-full">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Timeline
          </h2>
        </div>

        <div className="container mx-auto flex w-full items-start justify-start">
          <div className="relative w-full max-w-full sm:max-w-xs">
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

        <div className="container mx-auto mt-2 mb-4 flex w-full flex-col items-start justify-start gap-4 rounded-xl bg-white p-4 shadow sm:mt-4 sm:mb-8 sm:gap-6 sm:p-6">
          {eventsList.length === 0 ? (
            <div className="text-gray-500 flex items-center justify-center p-4">
              <p className="text-center">No events to display.</p>
            </div>
          ) : (
            eventsList.map((event, index) => {
              const friendName =
                friends.find(
                  (friend) => String(friend.id) === String(event.friendId),
                )?.name ?? "Unknown friend";
              const actionImage =
                event.action === "Call"
                  ? call
                  : event.action === "Video"
                    ? video
                    : text;

              return (
                <div
                  key={index}
                  className="flex w-full items-start justify-start gap-3 rounded-lg bg-white p-3 shadow sm:gap-4 sm:p-4"
                >
                  <div>
                    <Image
                      src={actionImage}
                      alt={friendName}
                      width={10}
                      height={10}
                      className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10"
                    />
                  </div>
                  <div className="flex min-w-0  flex-col items-start justify-between gap-2 sm:gap-3 ">
                    <p className="text-sm text-gray-800 sm:text-base">
                      <span className="text-base font-bold text-emerald-800 sm:text-xl">
                        {event.action}
                      </span>{" "}
                      with {friendName}
                    </p>
                    <p className="mb-1 text-xs text-gray-500 sm:text-sm">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;

"use client";

import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { Bounce, toast } from "react-toastify";

const TIMELINE_STORAGE_KEY = "keenKeeperTimelineEvents";

const QuickCheckInActions = ({ friend }) => {
  //   const saveTimelineEvent = (action) => {
  //     const entry = {
  //       id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
  //       friendId: friend?.id,
  //       friendName: friend?.name ?? "Unknown",
  //       action,
  //       createdAt: new Date().toISOString(),
  //     };

  //     try {
  //       const existing = JSON.parse(localStorage.getItem(TIMELINE_STORAGE_KEY) || "[]");
  //       const next = [entry, ...existing].slice(0, 300);
  //       localStorage.setItem(TIMELINE_STORAGE_KEY, JSON.stringify(next));
  //     } catch {
  //       localStorage.setItem(TIMELINE_STORAGE_KEY, JSON.stringify([entry]));
  //     }
  //   };
  const saveTimelineEvent = () => {
    console.log("Timeline event saved for friend:", friend?.name);

    toast.success("Event saved for " + friend?.name, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-3 w-full">
      <button
        type="button"
        onClick={() => saveTimelineEvent("Call")}
        className="btn h-full flex flex-col items-center justify-between gap-2 shadow rounded-2xl text-black text-center font-normal w-full p-4 bg-amber-50"
      >
        <BiPhoneCall size={25} />
        <p className="text-gray-600 text-center text-[14px] opacity-80 font-extralight">
          Call
        </p>
      </button>
      <button
        type="button"
        onClick={() => saveTimelineEvent("Text")}
        className="btn h-full flex flex-col items-center justify-between gap-2 shadow rounded-2xl text-black text-center font-normal w-full p-4 bg-amber-50"
      >
        <MdOutlineTextsms size={25} />
        <p className="text-gray-600 text-center text-[14px] opacity-80 font-extralight">
          Text
        </p>
      </button>
      <button
        type="button"
        onClick={() => saveTimelineEvent("Video")}
        className="btn h-full col-span-2 sm:col-span-1 flex flex-col items-center justify-between gap-2 shadow rounded-2xl text-black text-center font-normal w-full p-4 bg-amber-50"
      >
        <IoVideocamOutline size={25} />
        <p className="text-gray-600 text-center text-[14px] opacity-80 font-extralight">
          Video
        </p>
      </button>
    </div>
  );
};

export default QuickCheckInActions;

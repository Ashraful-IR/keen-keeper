"use client";

import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { Bounce, toast } from "react-toastify";
import { useContext } from "react";
import { EventContext } from "@/context/EventContext";

const QuickCheckInActions = ({ friend }) => {
  
  const { eventsList, setEventsList } = useContext(EventContext);
  console.log("Current events list:", eventsList);



  const saveTimelineEvent = ({ action }) => {
    console.log("Updated events list:", eventsList);
    setEventsList([
      ...eventsList,
      {
        action,
        friendId: friend?.id,
        date: new Date().toISOString(),
      },
    ]);

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
        onClick={() => saveTimelineEvent({ action: "Call" })}
        className="btn h-full flex flex-col items-center justify-between gap-2 shadow rounded-2xl text-black text-center font-normal w-full p-4 bg-amber-50"
      >
        <BiPhoneCall size={25} />
        <p className="text-gray-600 text-center text-[14px] opacity-80 font-extralight">
          Call
        </p>
      </button>
      <button
        type="button"
        onClick={() => saveTimelineEvent({ action: "Text" })}
        className="btn h-full flex flex-col items-center justify-between gap-2 shadow rounded-2xl text-black text-center font-normal w-full p-4 bg-amber-50"
      >
        <MdOutlineTextsms size={25} />
        <p className="text-gray-600 text-center text-[14px] opacity-80 font-extralight">
          Text
        </p>
      </button>
      <button
        type="button"
        onClick={() => saveTimelineEvent({ action: "Video" })}
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

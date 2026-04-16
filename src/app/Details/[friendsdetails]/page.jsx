import Image from "next/image";
import friends from "../../../../public/friends.json";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { MdOutlineDeleteOutline, MdOutlineTextsms } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import QuickCheckInActions from "./QuickCheckInActions";
import { use, useContext } from "react";

const FriendsDetails = async ({ params }) => {
  const { friendsdetails } = await params;
  const friend = friends.find(
    (item) => String(item.id) === String(friendsdetails),
  );

  if (!friend) {
    return (
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-black">Friend not found</h2>
      </div>
    );
  }
  

  return (
    <div className="bg-white flex flex-1 justify-center items-start min-h-full">
      <div className="container mx-auto bg-white grid grid-cols-1 lg:grid-cols-2 w-full px-4 py-6 gap-6 lg:gap-10 sm:px-6 lg:px-8">
        {/* Left grid */}
        <div className="flex flex-col justify-start items-start gap-4 sm:gap-5 w-full">
          <div className="w-full flex flex-col justify-center items-center gap-5 shadow rounded-2xl hover:shadow-lg transition-shadow duration-300 p-4 sm:p-5">
            <Image
              src={friend.picture}
              alt={friend.name}
              width={120}
              height={120}
              className="rounded-full w-20 h-20 sm:w-24 sm:h-24 object-cover"
            />
            <div className="flex flex-col justify-center items-center gap-3 text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-black">
                {friend.name}
              </h2>

              <p
                className={`text-sm text-[12px] font-medium px-4 py-1 rounded-2xl sm:text-base capitalize ${
                  friend.status === "on-track"
                    ? "bg-emerald-700 text-emerald-100"
                    : friend.status === "overdue"
                      ? "bg-red-700 text-red-100"
                      : "bg-yellow-500 text-yellow-100"
                }`}
              >
                {friend.status}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {friend.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-emerald-600 text-emerald-100 text-[12px] font-medium px-4 py-1 rounded-2xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-black mt-1 mb-2 px-2 sm:px-5 text-center text-[14px]  font-semibold">
                Email: {friend.email}
              </p>
              <p className="text-gray-600 mt-1 mb-2 px-2 sm:px-5 text-center text-[14px] opacity-80 font-extralight italic">
                {friend.bio}
              </p>
            </div>
          </div>
          <div className="btn shadow rounded-2xl w-full h-14 sm:h-15 font-normal">
            <h3 className="flex items-center justify-center gap-2 text-[15px] sm:text-[16px] text-black mt-3 mb-2">
              <RiNotificationSnoozeLine /> Snooze 2 weeks
            </h3>
          </div>
          <div className="btn shadow rounded-2xl w-full h-14 sm:h-15 text-center font-normal">
            <h3 className="flex items-center justify-center gap-2 text-[15px] sm:text-[16px] text-black mt-3 mb-2">
              <FiArchive /> Archive
            </h3>
          </div>
          <div className="btn shadow rounded-2xl w-full h-14 sm:h-15 text-center font-normal">
            <h3 className="flex items-center justify-center gap-2 text-[15px] sm:text-[16px] text-red-500 mt-3 mb-2">
              <MdOutlineDeleteOutline /> Delete
            </h3>
          </div>
        </div>
        {/* Right grid */}
        <div className="grid grid-cols-1 gap-5 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white p-2 sm:p-4 w-full min-h-35">
            <div className="flex flex-col justify-center items-center gap-3 w-full shadow rounded-2xl hover:shadow-lg transition-shadow duration-300 p-5">
              <h3 className="text-lg font-bold text-black mb-2">
                {friend.days_since_contact}
              </h3>
              <p className="text-gray-600">Day Since Contact</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 w-full shadow rounded-2xl hover:shadow-lg transition-shadow duration-300 p-5">
              <h3 className="text-lg font-bold text-black mb-2">
                {friend.goal}
              </h3>
              <p className="text-gray-600">Goal (Days)</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 w-full shadow rounded-2xl hover:shadow-lg transition-shadow duration-300 p-5">
              <h3 className="text-lg font-bold text-black mb-2">
                {friend.next_due_date}
              </h3>
              <p className="text-gray-600">Next Due Date</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-3 bg-white shadow rounded-2xl p-4 w-full min-h-35">
            <div className="flex flex-col justify-between items-start gap-5">
              <h3 className="text-lg font-bold text-emerald-800 mb-2">
                Realationship Goal
              </h3>
              <p className="text-gray-600 text-[14px] opacity-80 font-extralight">
                Coonect Every{" "}
                <span className="font-bold text-black">{friend.goal} Days</span>
              </p>
            </div>
            <div className="text-black text-sm font-medium ">
              <p className="btn">Edit</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-3 bg-white shadow rounded-2xl p-4 w-full min-h-35">
            <div className="flex flex-col justify-between items-start gap-5">
              <h3 className="text-lg font-bold text-emerald-800 mb-2">
                Quick Check-In
              </h3>
            </div>
            <QuickCheckInActions friend={friend} />
          </div>
          <div className="flex flex-col items-start justify-start gap-3 bg-white shadow rounded-2xl p-4 w-full min-h-35">
            {/* Recent Interactions */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 w-full">
              <h3 className="text-lg sm:text-xl font-bold text-emerald-800 mb-1 sm:mb-2">
                Recent Interactions
              </h3>
              <p className="btn text-black text-center text-[14px] opacity-80 font-extralight w-full sm:w-auto">
                <FaHistory /> Full History
              </p>
            </div>
            {/* Text */}
            <div className="flex  justify-between sm:items-center gap-4 w-full shadow rounded-2xl text-black p-4 sm:p-5">
              <div className="flex items-center justify-start gap-3 min-w-0">
                <MdOutlineTextsms size={35} />
                <div>
                  <p className="text-[16px] sm:text-[18px]">Text</p>
                  <p className="text-gray-600 text-[14px] sm:text-[16px] opacity-80 font-extralight">
                    Asked for career advice
                  </p>
                </div>
              </div>
              <div className="text-gray-600 text-[14px] opacity-80 font-extralight">
                <p>Jan 28, 2023</p>
              </div>
            </div>
            {/* MeetUp */}
            <div className="flex  justify-between sm:items-center gap-4 w-full shadow rounded-2xl text-black p-4 sm:p-5">
              <div className="flex items-center justify-start gap-3 min-w-0">
                <BiPhoneCall size={35} />
                <div>
                  <p className="text-[16px] sm:text-[18px]">Meetup</p>
                  <p className="text-gray-600 text-[14px] sm:text-[16px] opacity-80 font-extralight">
                    Industry conference meetup
                  </p>
                </div>
              </div>
              <div className="text-gray-600 text-[14px] opacity-80 font-extralight ">
                <p>Jan 28, 2023</p>
              </div>
            </div>
            {/* Video */}
            <div className="flex  justify-between sm:items-center gap-4 w-full shadow rounded-2xl text-black p-4 sm:p-5">
              <div className="flex items-center justify-start gap-3 min-w-0">
                <IoVideocamOutline size={35} />
                <div>
                  <p className="text-[16px] sm:text-[18px]">Video</p>
                  <p className="text-gray-600 text-[14px] sm:text-[16px] opacity-80 font-extralight">
                    Asked for career advice
                  </p>
                </div>
              </div>
              <div className="text-gray-600 text-[14px] opacity-80 font-extralight ">
                <p>Jan 28, 2023</p>
              </div>
            </div>
            {/* Call */}
            <div className="flex justify-between sm:items-center gap-4 w-full shadow rounded-2xl text-black p-4 sm:p-5">
              <div className="flex items-center justify-start gap-3 min-w-0">
                <BiPhoneCall size={35} />
                <div>
                  <p className="text-[16px] sm:text-[18px]">Call</p>
                  <p className="text-gray-600 text-[14px] sm:text-[16px] opacity-80 font-extralight">
                    Asked for career advice
                  </p>
                </div>
              </div>
              <div className="text-gray-600 text-[14px] opacity-80 font-extralight ">
                <p>Jan 28, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;

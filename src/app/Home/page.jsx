"use client";
import CardPage from "@/component/UI/Card/page";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ClimbingBoxLoader } from "react-spinners";

const HomePage = () => {
  const [friendsDetails, setFriendsDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFriendsDetails = async () => {
      const response = await fetch("/friends.json");
      const data = await response.json();
      setFriendsDetails(data);
      console.log(data);
      setIsLoading(false);
    };
    fetchFriendsDetails();
  }, []);
  return (
    <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-black text-4xl mt-5 sm:text-4xl lg:text-5xl font-bold leading-tight">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-600 mt-2 mb-4 sm:mb-6 text-sm sm:text-base max-w-2xl">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br className="hidden sm:block" />
          relationships that matter most.
        </p>
        <button className="btn bg-emerald-900 text-white font-semibold text-sm w-auto sm:w-auto">
          <FaPlus /> Add a Friend
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-8 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center gap-2 bg-white shadow p-4 rounded-lg w-full min-h-35">
          <h2 className="text-black text-2xl font-bold">
            {friendsDetails.length}
          </h2>
          <p className="text-gray-600">Total Friends</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 bg-white shadow p-4 rounded-lg w-full min-h-35">
          <h2 className="text-black text-2xl font-bold">
            {
              friendsDetails.filter((friend) => friend.status === "on-track")
                .length
            }
          </h2>
          <p className="text-gray-600">On Track</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 bg-white shadow p-4 rounded-lg w-full min-h-35">
          <h2 className="text-black text-2xl font-bold">
            {
              friendsDetails.filter((friend) => friend.status === "overdue")
                .length
            }
          </h2>
          <p className="text-gray-600">Need Attention</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 bg-white shadow p-4 rounded-lg w-full min-h-35">
          <h2 className="text-black text-2xl font-bold">
            {
              friendsDetails.filter((friend) => friend.status === "almost due")
                .length
            }
          </h2>
          <p className="text-gray-600">Interactions This Month</p>
        </div>
      </div>
      <p className="text-black font-bold mt-6 mb-4 text-xl sm:text-2xl">
        Your Friends
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-5 gap-4 sm:gap-5">
        {isLoading ? (
          <div className="flex items-center justify-center col-span-full">
            <ClimbingBoxLoader color="#004f3b" />
          </div>
        ) : (
          <CardPage friendsDetails={friendsDetails} />
        )}
      </div>
    </div>
  );
};

export default HomePage;

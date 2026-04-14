import Image from "next/image";
import { Bounce, toast } from "react-toastify";

const CardPage = ({ friendsDetails }) => {
  const friends = friendsDetails;
  const handleClick = (friend) => {
    console.log("Card clicked!");
    toast.success(`${friend.name} details displayed!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <>
      {friends.map((friend) => (
        <div
          onClick={() => handleClick(friend)}
          key={friend.id}
          className="flex flex-col items-center justify-center gap-4 bg-white shadow p-4 rounded-lg w-full min-h-42.5 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        >
          <Image
            src={friend.picture}
            alt={friend.name}
            width={100}
            height={500}
            className="rounded-full w-20 h-20 object-cover"
          />

          <h3 className="text-black text-[20px] sm:text-xl font-semibold wrap-break-word">
            {friend.name}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            {friend.days_since_contact}d ago
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
          {/* <p className="text-gray-600">{friend.tags}</p> */}
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
        </div>
      ))}
    </>
  );
};

export default CardPage;

import { FaPlus } from "react-icons/fa";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col justify-between items-center gap-3">
        <h1 className="text-black text-5xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-600 mt-4 mb-6 text-center text-[16px]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the
          <br />
          relationships that matter most.
        </p>
        <button className="btn bg-emerald-900 text-white font-semibold text-[14px]">
          <FaPlus /> Add a Friend
        </button>
      </div>
      <div className="flex justify-between items-baseline gap-4 mt-10">
        <div className="flex flex-col items-center justify-center gap-2 bg-white shadow p-4 rounded-lg w-90 h-35">
          <h2 className="text-black text-2xl font-bold">10</h2>
          <p className="text-gray-600">Total Friends</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 bg-white shadow p-4 rounded-lg w-90 h-35">
          <h2 className="text-black text-2xl font-bold">5</h2>
          <p className="text-gray-600">On Track</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 bg-white shadow p-4 rounded-lg w-90 h-35">
          <h2 className="text-black text-2xl font-bold">3</h2>
          <p className="text-gray-600">Need Attention</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 bg-white shadow p-4 rounded-lg w-90 h-35">
          <h2 className="text-black text-2xl font-bold">2</h2>
          <p className="text-gray-600">Interactions This Month</p>
        </div>
      </div>
      <p className="text-black text-lg font-bold mt-4 mb-6 text-[22px]">
        Your Friends
      </p>
    </div>
  );
};

export default HomePage;

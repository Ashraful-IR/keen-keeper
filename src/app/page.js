import HomePage from "./Home/page";

// const friendsDetails = async() => {
//     const response = await fetch("/friends.json");
//     const data = await response.json();
//     return data;
// };

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
      <HomePage />
    </div>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GoHome } from "react-icons/go";
import { ImStatsDots } from "react-icons/im";
import { IoHome } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";

const NavbarPage = () => {
  const pathname = usePathname();
  return (
    <div className="navbar bg-base-100 shadow-sm px-5">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-[24px] font-extrabold text-black">
          Keen<span className="text-emerald-900">Keepr</span>
        </Link>
      </div>
      <div className="flex justify-end gap-5 ">
        <Link
          href="/"
          className={`link ${pathname === "/" ? 'text-white bg-emerald-900 px-3 py-0.5 no-underline rounded-md' : ''} text-gray-400 font-extralight text-[16px] no-underline flex items-center gap-1 `}
        >
          <GoHome size={16} />Home
        </Link>
        <Link
          href="/Timeline"
          className={`link ${pathname === "/Timeline" ? 'text-white bg-emerald-900 px-3 py-0.5 no-underline rounded-md' : ''} text-gray-400 font-extralight text-[16px] no-underline flex items-center gap-1 `}
        >
         <RiTimeLine size={16} />Timeline
        </Link>
        <Link
          href="/Stats"
          className={`link ${pathname === "/Stats" ? 'text-white bg-emerald-900 px-3 py-0.5 no-underline rounded-md' : ''} text-gray-400 font-extralight text-[16px] no-underline flex items-center gap-1 `}
        >
          <ImStatsDots size={16} />Stats
        </Link>
      </div>
    </div>
  );
};

export default NavbarPage;

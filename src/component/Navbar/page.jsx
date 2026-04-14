"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBars } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { ImStatsDots } from "react-icons/im";
import { RiTimeLine } from "react-icons/ri";

const navLinks = [
  { href: "/", label: "Home", icon: GoHome },
  { href: "/Timeline", label: "Timeline", icon: RiTimeLine },
  { href: "/Stats", label: "Stats", icon: ImStatsDots },
];

const NavbarPage = () => {
  const pathname = usePathname();

  const linkClassName = (href) =>
    `link flex items-center gap-1 text-[16px] no-underline font-extralight ${
      pathname === href
        ? "text-white bg-emerald-900 px-3 py-0.5 rounded-md"
        : "text-gray-400"
    }`;

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 sm:px-5">
      <div className="navbar-start">
        <Link
          href="/"
          className=" btn btn-ghost text-[20px] sm:text-[24px] font-extrabold text-black px-2"
        >
          Keen<span className="text-emerald-900">Keepr</span>
        </Link>
      </div>
      <div className="navbar-end hidden sm:flex">
        <div className="flex items-center gap-5">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className={linkClassName(href)}>
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="navbar-end sm:hidden">
        <div className="dropdown dropdown-end">
          <button
            type="button"
            tabIndex={0}
            className="btn btn-ghost btn-square text-black"
            aria-label="Open navigation menu"
          >
            <FaBars size={20} />
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link href={href} className={linkClassName(href)}>
                  <Icon size={16} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;

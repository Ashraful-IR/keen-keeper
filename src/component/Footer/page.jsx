import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const FooterPage = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#1a8862] text-white rounded p-10">
      <div className="gap-5">
        <h1 className="text-5xl font-bold">KeenKeepr</h1>
        <p
          className=" text-[16px] text-center
        "
        >
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </div>

      <div className="gap-5">
        <span className="text-[20px]">Social Links</span>
        <div className="flex gap-5">
            <a className="link link-hover text-black bg-white rounded-full w-8 h-8 flex items-center justify-center"><FaInstagramSquare size={15}/></a>
            <a className="link link-hover text-black bg-white rounded-full w-8 h-8 flex items-center justify-center"><FaTwitter size={15}/></a>
            <a className="link link-hover text-black bg-white rounded-full w-8 h-8 flex items-center justify-center"><FaFacebook size={15}/></a>

        </div>
      </div>

      <div className="line w-full h-0.5 bg-gray-400 opacity-20"></div>

      <aside className="flex items-center justify-between w-full">
        <p>© {new Date().getFullYear()} KeenKeepr - All right reserved.</p>
        <div
          className="flex
         gap-5"
        >
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Cookies</a>
        </div>
      </aside>
    </footer>
  );
};

export default FooterPage;

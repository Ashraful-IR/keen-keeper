import React from "react";
import "./globals.css";
import Link from "next/link";

const GlobalNotFound = () => {
  return (
    <html lang="en" data-theme="light" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
            

        <div className=" flex flex-col items-center justify-center h-screen gap-5 ">
          <div className="text-[300px] font-bold text-center  text-emerald-400 rounded-lg shadow-lg">
            404
          </div>
          
          <p className="text-[24px] text-white italic font-light text-center">
            We are sorry but the page you are looking for does not exist. <br /> Please
            check the URL or return to the homepage.
          </p>
          <Link href="/" className="text-emerald-500 hover:underline">
            Go Home
          </Link>
        </div>
      </body>
    </html>
  );
};

export default GlobalNotFound;

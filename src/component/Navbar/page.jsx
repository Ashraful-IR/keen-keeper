import React from "react";

const NavbarPage = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-black">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-black">Link</a>
          </li>
          <li>
            <a className="text-black">Link</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarPage;

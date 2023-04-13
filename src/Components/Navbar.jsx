import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-[100%] h-[60px] bg-teal-800"></div>
      <div className="w-[20%] h-[600px] border 1px solid bg-red-500 space-y-20  ">
        <Link to="/contactpage">
          <h2 className="text-2xl text-white-500 m-10  font-bold">Contact page</h2>
        </Link>
        <hr />
        <Link to="/charts&maps">
          <h2 className="text-2xl text-white-500    m-10  font-bold">Charts and Maps</h2>
        </Link>
        <hr />
      </div>
    </>
  );
};

export default Navbar;

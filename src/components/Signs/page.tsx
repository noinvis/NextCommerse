"use client";
import { memo } from "react";

const Signs = () => {
  const handleSignIn = () => {
    open("http://localhost:5173/login");
  };
  const handleSignUp = () => {
    open("http://localhost:5173/register");
  };
  return (
    <div className="flex gap-[1rem] items-center">
      <button onClick={handleSignIn} className="border border-green-700 hover:bg-white bg-green-700 text-white duration-300 cursor-pointer px-[20px] py-[7px] hover:text-green-700 rounded-[12px]">
        Login
      </button>
      <button onClick={handleSignUp} className="border border-green-700 hover:bg-white bg-green-700 text-white duration-300 cursor-pointer px-[20px] py-[7px] hover:text-green-700 rounded-[12px]">
        Register
      </button>
    </div>
  );
};

export default memo(Signs);

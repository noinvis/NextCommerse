"use client";
import { CircleUserRound, ShoppingCart } from "lucide-react";
import { memo } from "react";

const Signs = () => {
  const handleSignIn = () => {
    open("https://e-commerse-eight-brown.vercel.app/login");
  };
  return (
    <div className="flex gap-[1rem] items-center">
      <button className="cursor-pointer">
        <ShoppingCart />
      </button>
      <button className="cursor-pointer">
        <CircleUserRound />
      </button>
      <button
        onClick={handleSignIn}
        className="border hover:bg-white bg-black text-white duration-300 cursor-pointer px-[20px] py-[7px] hover:text-black rounded-[12px]"
      >
        Login
      </button>
    </div>
  );
};

export default memo(Signs);

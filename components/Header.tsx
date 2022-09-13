import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Header = () => {
   return (
      <div className="bg-light-primary dark:bg-dark-primary flex justify-between items-center w-[90%] mx-auto rounded-b-lg py-[10px]">
         <div className="ml-7 flex items-center justify-center">
            <div className="flex items-center justify-center cursor-pointer border-[3px] border-[#30373D] dark:border-light-bg w-[40px] h-[30px] rounded-lg font-bold mr-3 text-xs">
               VI
            </div>
            <ThemeToggler />
         </div>
         <div>
            <Link href="/">
               <Logo width="125" />
            </Link>
         </div>
         <div className="mr-7 flex items-center">
            <Link href="/">
               <button className="p-2 bg-[#525EC1] text-light-bg rounded-lg mr-4 text-sm font-semibold hover:opacity-75">
                  Sign in
               </button>
            </Link>
            <button className="w-10 h-10 hover:bg-slate-300 flex items-center justify-center hover: rounded-lg">
               <HiOutlineShoppingCart className="w-6 h-6" />
            </button>
         </div>
      </div>
   );
};

export default Header;
"use client";

import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { gym } from "@/public/assets";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="w-full bg-white h-[70px] border-b border-b-[#D5C8E9] flex items-center justify-between p-8">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src={gym} alt={"logo"} width={30} height={30} className="object-contain" />
        <p className="hidden md:inline-block">FitGenius</p>
      </Link>

      <div className="hidden sm:flex gap-5 uppercase font-medium">
        <Link href="">about</Link>
        <a href="#features">features</a>
        {/* <a href="#services">services</a> */}
        <a href="#pricing">pricing</a>
        <a href="#contact">contact</a>
      </div>

      <div className="hidden sm:block">placeholder</div>

      {/* MOBILE NAVIGATION */}
      <div className="relative flex sm:hidden">
        <div className="flex">
          {!toggleDropdown ? (
            <HiMenu
              size={30}
              onClick={() => setToggleDropdown((prev) => !prev)}
              className="cursor-pointer"
            />
          ) : (
            <HiX
              size={30}
              onClick={() => setToggleDropdown((prev) => !prev)}
              className="cursor-pointer"
            />
          )}
          {toggleDropdown && (
            <div className="fixed top-20 right-0 z-50 p-8 w-[60%] rounded-lg h-[150px] bg-white flex flex-col gap-2 justify-end items-end shadow-black/20">
              <Link
                href="/profile"
                className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                onClick={() => setToggleDropdown(false)}
              >
                My Profile
              </Link>
              <Link
                href="/about"
                className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                onClick={() => setToggleDropdown(false)}
              >
                About
              </Link>
              <Link
                href="/profile"
                className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                onClick={() => setToggleDropdown(false)}
              >
                Features
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

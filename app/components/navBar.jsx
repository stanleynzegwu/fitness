// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// import { gym, maleTrainer } from "@/public/assets";
// import { Login } from "../auth";

// // const Navbar = () => {
// //   return <nav className="w-full bg-white h-[70px] border-b border-b-[#D5C8E9]"></nav>;
// // };

// // export default Navbar;

// const Navbar = () => {
//   const isUerLoggedIn = false;

//   const [toggleDropdown, setToggleDropdown] = useState(false);

//   return (
//     <nav className="w-full bg-white h-[70px] border-b border-b-[#D5C8E9] flex items-center justify-between p-8">
//       <Link href="/" className="flex gap-2 flex-center">
//         <Image src={gym} alt={"logo"} width={30} height={30} className="object-contain" />
//         <p className="hidden md:inline-block">FitGenius</p>
//       </Link>

//       <div className="hidden sm:flex gap-5">
//         <span>features</span>
//         <span>services</span>
//         <span>pricing</span>
//         <span>contact</span>
//       </div>

//       {/* DESKTOPN NAVIGATION */}
//       <div className="hidden sm:flex">
//         {isUerLoggedIn ? (
//           <div className="flex gap-3 md:gap-5">
//             <Link href="/profile">
//               <Image
//                 src={maleTrainer}
//                 alt={"user profile"}
//                 width={35}
//                 height={35}
//                 className="rounded-full"
//               />
//             </Link>
//             <button type="button" onClick={() => {}}>
//               Sign Out
//             </button>
//           </div>
//         ) : (
//           <Login />
//         )}
//       </div>

//       {/* MOBILE NAVIGATION */}
//       <div className="relative flex sm:hidden">
//         {isUerLoggedIn ? (
//           <div className="flex">
//             <Image
//               src={maleTrainer}
//               alt={"user profile"}
//               width={35}
//               height={35}
//               className="rounded-full cursor-pointer"
//               onClick={() => setToggleDropdown((prev) => !prev)}
//             />

//             {toggleDropdown && (
//               // <div className="absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-red-200 min-w-[210px] flex flex-col gap-2 justify-end items-end">
//               <div className="fixed top-20 right-0 z-50 p-8 w-[60%] rounded-lg h-[150px] bg-white flex flex-col gap-2 justify-end items-end shadow-black/20">
//                 <Link
//                   href="/profile"
//                   className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
//                   onClick={() => setToggleDropdown(false)}
//                 >
//                   My Profile
//                 </Link>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setToggleDropdown(false);
//                   }}
//                   className="mt-5 w-full rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"
//                 >
//                   Sign Out
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <Login />
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import { gym, maleTrainer } from "@/public/assets";

const Navbar = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="w-full bg-white h-[70px] border-b border-b-[#D5C8E9] flex items-center justify-between p-8">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src={gym} alt={"logo"} width={30} height={30} className="object-contain" />
        <p className="hidden md:inline-block">FitGenius</p>
      </Link>

      <div className="hidden sm:flex gap-5 uppercase font-medium">
        <span>about</span>
        <span>features</span>
        <span>services</span>
        <span>pricing</span>
        <span>contact</span>
      </div>

      {/* DESKTOPN NAVIGATION */}
      <div className="hidden sm:flex">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/profile">
              <Image
                src={maleTrainer}
                alt={"user profile"}
                width={35}
                height={35}
                className="rounded-full"
              />
            </Link>
            <button type="button" onClick={signOut}>
              Sign Out
            </button>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="text-sm bg-black hover:bg-white hover:text-black rounded-full text-white px-6 py-2 disabled:opacity-25"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

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
            // <div className="absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-red-200 min-w-[210px] flex flex-col gap-2 justify-end items-end">
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

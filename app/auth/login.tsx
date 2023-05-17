// "use client";

// import { signIn } from "next-auth/react";

// const Login = () => {
//   return (
//     <li className="list-none">
//       <button
//         className="text-sm bg-black hover:bg-white hover:text-black rounded-full text-white px-6 py-2 disabled:opacity-25"
//         onClick={() => signIn()}
//       >
//         Sign In
//       </button>
//     </li>
//   );
// };

// export default Login;

"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { maleTrainer } from "@/public/assets";
import { UserCard } from "../components";

const Login = () => {
  //get session from nextAuth
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex gap-3 md:gap-5">
        <Image
          src={maleTrainer}
          alt={"user profile"}
          width={35}
          height={35}
          className="rounded-full"
        />
        <button type="button" onClick={() => signOut()}>
          Sign Out
        </button>
        {/* pass session info to server component */}
        <UserCard user={session?.user} />
      </div>
    );
  } else {
    return (
      <li className="list-none">
        <button
          className="text-sm bg-black hover:bg-white hover:text-black rounded-full text-white px-6 py-2 disabled:opacity-25"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      </li>
    );
  }
};

export default Login;

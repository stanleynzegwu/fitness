// import Image from "next/image";
// import { FaHeartbeat } from "react-icons/fa";
// import { TbActivityHeartbeat } from "react-icons/tb";
// import { MdSportsGymnastics } from "react-icons/md";
// import { dotted, blueDotted, redDotted, redDotted1 } from "@/public/assets";

// import ShowNumbers from "../components/showNumbers";
// const Hero = () => {
//   return (
//     <section className="p-8 relative flex flex-col gap-1.5 h-fit bg-gradient-to-br from-[#FFF2F9] to-[#F7FDFF] md:h-screen md:flex-row">
//       <div className="w-full flex flex-col justify-center md:w-1/2 md:h-[100%]">
//         <h1 className="text-5xl font-bold leading-normal ">
//           Solutions For Moving Better And Feeling Healthier
//         </h1>
//         <p className="md:text-lg">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maxime sequi quisquam rem
//           deserunt.
//         </p>
//         <button className="bg-purple-700 text-white w-40 p-2 my-10 rounded-full mx-auto">
//           Get Started
//         </button>
//         <div className="flex justify-between gap-2 w-full">
//           {[
//             ["160K", "Members"],
//             ["20M", "Customers"],
//             ["12K", "Review"],
//             ["35M", "Followers"],
//           ].map(([value, name], index) => (
//             <ShowNumbers key={index} value={value} name={name} />
//           ))}
//         </div>
//       </div>
//       <div className=" flex justify-center h-[500px] items-center md:w-1/2 md:h-[100%]">
//         <div className=" w-[80%] bg-blue-200 h-[80%] rounded-t-full relative z-10 md:h-[80%]">
//           {/* heartbeat */}
//           <div className="bg-white p-3 w-40 flex flex-col rounded-md absolute top-3 right-0">
//             <p className="flex items-center justify-center gap-1">
//               <FaHeartbeat className="text-red-600" />
//               Heart Beat
//             </p>
//             <p className="text-center font-bold">8009bpm</p>
//           </div>
//           {/* running */}
//           <div className="bg-white p-2 w-40 flex flex-col rounded-md absolute top-[50%] -right-[50px]">
//             <p className="flex items-center justify-center gap-1">
//               <span className="text-red-600 font-semibold">96</span> BPM
//               <TbActivityHeartbeat className="text-pink-500" />
//             </p>
//             <p className="text-center">This minute running</p>
//           </div>
//           {/* calories */}
//           <div className="bg-white p-4 w-30 flex flex-col rounded-md absolute bottom-[-10%] right-[90%]">
//             <p className="text-black">Do Healthy Workouts</p>
//             <MdSportsGymnastics className="text-6xl mx-auto" />
//           </div>
//         </div>
//         <Image
//           src="/assets/modelGroup.png"
//           alt="model"
//           width={450}
//           height={450}
//           className="object-contain lg:w-5/12"
//           style={{ position: "absolute", transform: "rotateY(180deg)", zIndex: "20" }}
//           priority
//         />
//       </div>

//       {/* DOTTED ABSOLUTE POSITIONED IMAGES */}
//       <Image
//         src={blueDotted}
//         alt="dotted"
//         width={200}
//         height={200}
//         className="absolute top-[5px] left-0 font-bold text-7xl w-[250px] h-[150px]"
//       />
//       <Image
//         src={redDotted}
//         alt="dotted"
//         width={200}
//         height={200}
//         className="absolute top-0 right-0 font-bold text-7xl "
//       />
//       <Image
//         src={redDotted1}
//         alt="dotted"
//         width={200}
//         height={200}
//         className="absolute top-[50%] left-[30%] font-bold text-7xl "
//       />
//     </section>
//   );
// };

// export default Hero;

import Image from "next/image";
import { FaHeartbeat } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { MdSportsGymnastics } from "react-icons/md";
import { dotted, blueDotted, redDotted, redDotted1 } from "@/public/assets";

import ShowNumbers from "../components/showNumbers";
const Hero = () => {
  return (
    <section className="p-8 relative flex flex-col gap-1.5 h-fit bg-gradient-to-br from-[#FFF2F9] to-[#F7FDFF] lg:h-screen lg:flex-row">
      <div className="w-full flex flex-col justify-center items-center lg:w-1/2 lg:h-[100%]">
        <h1 className="text-5xl font-bold leading-normal ">
          Solutions For Moving Better And Feeling Healthier
        </h1>
        <p className="md:text-lg text-gray-500">
          Unlock your potential ! Sweat it out, build strength, improve endurance & feel better.
          Join us today and discover a healthier, happier you!
        </p>
        <button className="bg-purple-700 text-white w-40 p-2 my-10 rounded-full mx-auto">
          Get Started
        </button>
        <div className="flex justify-between gap-2 w-full">
          {[
            ["160K", "Members"],
            ["20M", "Customers"],
            ["12K", "Reviews"],
            ["35M", "Followers"],
          ].map(([value, name], index) => (
            <ShowNumbers key={index} value={value} name={name} />
          ))}
        </div>
      </div>
      <div className=" flex justify-center h-[450px] sm:h-[500px] md:h-[600px] items-center lg:w-1/2 lg:h-[100%]">
        <div className=" w-[85%] sm:w-[80%] md:w-[60%] lg:w-[80%] bg-blue-200 h-[80%] rounded-t-full relative z-10 lg:h-[80%] ">
          {/* heartbeat */}
          <div className="bg-white p-1 sm:p-3 w-40 flex flex-col rounded-md absolute top-3 right-0">
            <p className="flex items-center justify-center gap-1 text-gray-500">
              <FaHeartbeat className="text-red-600" />
              Heart Beat
            </p>
            <p className="text-center font-bold">8009bpm</p>
          </div>
          {/* running */}
          <div className="bg-white p-1 sm:p-2 w-40 flex flex-col rounded-md absolute top-[50%] -right-[50px]">
            <p className="flex items-center justify-center gap-1 text-gray-500">
              <span className="text-red-600 font-semibold">96</span> BPM
              <TbActivityHeartbeat className="text-pink-500" />
            </p>
            <p className="text-center text-gray-500">This minute running</p>
          </div>
          {/* calories */}
          <div className="bg-white p-1 sm:p-3 w-30 flex flex-col rounded-md absolute bottom-[-10%] right-[90%]">
            <p className="text-gray-500">Do Healthy Workouts</p>
            <MdSportsGymnastics className="text-6xl mx-auto" />
          </div>
        </div>
        <Image
          src="/assets/modelGroup.png"
          alt="model"
          width={450}
          height={450}
          className="object-contain lg:w-5/12"
          style={{ position: "absolute", transform: "rotateY(180deg)", zIndex: "20" }}
          priority
        />
      </div>

      {/* DOTTED ABSOLUTE POSITIONED IMAGES */}
      <Image
        src={blueDotted}
        alt="dotted"
        width={200}
        height={200}
        className="absolute top-[5px] left-0 font-bold text-7xl w-[250px] h-[150px]"
      />
      <Image
        src={redDotted}
        alt="dotted"
        width={200}
        height={200}
        className="absolute top-[60%] max-sm:-translate-y-[60%] right-0 md:top-[50%] max-md:-translate-y-[50%] md:right-5 lg:top-0 lg:right-0 font-bold text-7xl "
      />
      <Image
        src={redDotted1}
        alt="dotted"
        width={200}
        height={200}
        className="hidden md:absolute top-[50%] left-[30%] font-bold text-7xl "
      />
    </section>
  );
};

export default Hero;

import { FaHeartbeat } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { MdSportsGymnastics } from "react-icons/md";

import Image from "next/image";
import ShowNumbers from "../components/showNumbers";
const Hero = () => {
  return (
    <section className="p-8 relative flex flex-col gap-1.5 h-fit bg-gradient-to-br from-[#FFF2F9] to-[#F7FDFF] md:h-screen md:flex-row">
      <div className="w-full flex flex-col justify-center md:w-1/2 md:h-[100%]">
        <h1 className="text-5xl font-bold leading-normal ">
          Solutions For Moving Better And Feeling Healthier
        </h1>
        <p className="md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maxime sequi quisquam rem
          deserunt.
        </p>
        <button className="bg-purple-700 text-white w-40 p-2 my-10 rounded-full mx-auto">
          Get Started
        </button>
        <div className="flex justify-between gap-2 w-full">
          {[
            ["160K", "Members"],
            ["20M", "Customers"],
            ["12K", "Review"],
            ["35M", "Followers"],
          ].map(([value, name], index) => (
            <ShowNumbers key={index} value={value} name={name} />
          ))}
        </div>
      </div>
      <div className=" flex justify-center h-[500px] items-center md:w-1/2 md:h-[100%]">
        <div className=" w-[80%] bg-blue-200 h-[80%] rounded-t-full relative z-10 md:h-[80%]">
          {/* heartbeat */}
          <div className="bg-white p-3 w-40 flex flex-col rounded-md absolute top-3 right-0">
            <p className="flex items-center justify-center gap-1">
              <FaHeartbeat className="text-red-600" />
              Heart Beat
            </p>
            <p className="text-center font-bold">8009bpm</p>
          </div>
          {/* running */}
          <div className="bg-white p-2 w-40 flex flex-col rounded-md absolute top-[50%] -right-[50px]">
            <p className="flex items-center justify-center gap-1">
              <span className="text-red-600 font-semibold">96</span> BPM
              <TbActivityHeartbeat className="text-pink-500" />
            </p>
            <p className="text-center">This minute running</p>
          </div>
          {/* calories */}
          <div className="bg-white p-4 w-30 flex flex-col rounded-md absolute bottom-[-10%] right-[90%]">
            <p className="text-black">Do Healthy Workouts</p>
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
        />
      </div>
    </section>
  );
};

export default Hero;

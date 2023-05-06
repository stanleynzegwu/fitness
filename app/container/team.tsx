import Image from "next/image";

import { femaleTrainer, femaleTrainer1, maleTrainer } from "@/public/assets";
import { ContainerWrapper } from "../components";

const Team = () => {
  return (
    <ContainerWrapper>
      <section className="px-8 min-h-screen flex flex-col gap-6 bg-gradient-to-br from-[#FFF2F9] to-[#F7FDFF] justify-center">
        <div className="mx-auto text-center">
          <h3 className="text-2xl font-bold capitalize">
            <span className="border-solid border-b-2 border-red-500">our</span> team
          </h3>
          <p className="text-3xl font-bold capitalize">dedicated and professional trainers</p>
        </div>
        <div className="flex justify-center gap-4 max-lg:flex-wrap lg:gap-10 w-full">
          {[
            {
              img: femaleTrainer,
              name: "vlamdMir Putin",
              role: "manager fitness studio",
              bgColor: "bg-[#fbeff7]",
            },
            {
              img: femaleTrainer1,
              name: "vlamdMir Putin",
              role: "manager fitness studio",
              bgColor: "bg-[#fff]",
            },
            {
              img: maleTrainer,
              name: "vlamdMir Putin",
              role: "manager fitness studio",
              bgColor: "bg-blue-200",
            },
          ].map(({ img, name, role, bgColor }, index) => (
            <div key={index} className="text-center w-1/3 min-w-[300px] max-w-[350px]">
              <div className="h-[400px] xl:h-[450px] rounded-t-full w-full">
                <Image
                  src={img}
                  alt="trainer"
                  width={200}
                  height={200}
                  className={`h-full rounded-t-full w-full object-cover ${bgColor}`}
                />
              </div>
              <span className="block font-semibold">{name}</span>
              <p>{role}</p>
            </div>
          ))}
        </div>
      </section>
    </ContainerWrapper>
  );
};

export default Team;

import { HiOutlineBadgeCheck } from "react-icons/hi";

import { ContainerWrapper } from "../components";
import { pricing } from "../constants";

const Pricing = () => {
  const { uniquePlan, constantData } = pricing;
  return (
    <ContainerWrapper>
      <section className="px-8 min-h-screen flex flex-col gap-6 justify-center">
        <div className="mx-auto text-center">
          <h3 className="text-2xl font-bold capitalize">
            <span className="border-solid border-b-2 border-red-500">pricing</span> plan
          </h3>
          <p className="text-3xl font-bold capitalize">
            join our membership <br /> let's start
          </p>
        </div>
        {/* cards */}
        <div className="flex justify-center max-lg:flex-wrap gap-4 lg:gap-10 w-full">
          {uniquePlan.map(({ plan, price, duration }, index) => (
            <div
              key={index}
              className="h-[400px] xl:h-[450px] min-w-[300px] max-w-[350px] rounded-t-full rounded-b-full odd:bg-[#FFF2F9] even:bg-purple-700 even:text-white p-6 flex flex-col justify-center items-center gap-6 w-1/3"
            >
              <span className="capitalize font-semibold">{plan} plan</span>
              <p>
                <span className="text-2xl font-bold">{price}/</span>
                {plan.split("ly")[0]}
              </p>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2">
                  <HiOutlineBadgeCheck /> {duration}
                </li>
                {constantData.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <HiOutlineBadgeCheck /> {item}
                  </li>
                ))}
              </ul>
              <button className="bg-pink-500 text-white w-28 p-2 rounded-full">Join now</button>
            </div>
          ))}
        </div>
      </section>
    </ContainerWrapper>
  );
};

export default Pricing;

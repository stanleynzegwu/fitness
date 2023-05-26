import Link from "next/link";
import Image from "next/image";
import { gym } from "@/public/assets";

const Footer = () => {
  return (
    <div id="contact" className="px-8 py-10 bg-blue-200 flex flex-col">
      <div className="flex flex-col pb-8 lg:flex-row w-full">
        {/* company address */}
        <div className="flex flex-col w-full lg:w-[35%]">
          <Link href="/" className="flex gap-2 flex-center pb-4">
            <Image src={gym} alt={"logo"} width={30} height={30} className="object-contain" />
            <p className="hidden font-bold md:inline-block">FitGenius</p>
          </Link>
          <p>
            Solutions For Moving Better And Feeling Healthier
            <br />
            Sweat it out
            <br />
            build strength
            <br />
            improve endurance & feel better
            <br />
            212 Allen Rd,Dt.
          </p>
        </div>
        <div className="flex w-full flex-col items-between lg:justify-between lg:flex-row lg:w-[65%]">
          <div className="flex flex-col">
            <span className="text-[1.2rem] font-bold capitalize pb-4">quick links</span>
            <ul className="flex flex-col gap-2">
              <li className="text-[1.2rem] capitalize">about us</li>
              <li className="text-[1.2rem] capitalize">offer</li>
              <li className="text-[1.2rem] capitalize">offer</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-[1.2rem] font-bold capitalize pb-4">support</span>
            <ul className="flex flex-col gap-2">
              <li className="text-[1.2rem] capitalize">about us</li>
              <li className="text-[1.2rem] capitalize">offer</li>
              <li className="text-[1.2rem] capitalize">FAQ</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-[1.2rem] font-bold capitalize pb-4">contact</span>
            <ul className="flex flex-col gap-2">
              <li className="text-[1.2rem] capitalize">about us</li>
              <li className="text-[1.2rem] capitalize">offer</li>
              <li className="text-[1.2rem] capitalize">offer</li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="flex justify-center capitalize w-full pt-8 border-t-[1px] border-gray-600">
        <li className="border-r-[1px] border-gray-300 px-2 text-gray-600">privacy policy</li>
        <li className="border-r-[1px] border-gray-300 px-2 text-gray-600">terms of use</li>
        <li className="px-2 text-gray-600">customer code</li>
      </ul>
    </div>
  );
};

export default Footer;

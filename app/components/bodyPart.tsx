import { bodyPartIcon } from "../constants";
import Image from "next/image";

interface Props {
  part: string;
  selectedBodyPart: string;
  setSelectedBodyPart: (setSelectedBodyPart: string) => void;
}

const BodyPart = ({ part, selectedBodyPart, setSelectedBodyPart }: Props) => {
  return (
    <div
      className={`w-[220px]  inline-block m-2 p-2 py-4 sm:py-6 cursor-pointer hover:scale-105 ease-in-out duration-300 bg-[#fbeff7] ${
        part === selectedBodyPart ? "border-t-4 border-red-600" : ""
      }`}
      onClick={() => {
        setSelectedBodyPart(part);
        window.scrollTo({ top: 800, left: 100, behavior: "smooth" });
      }}
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <Image
          src={bodyPartIcon[part]}
          alt="bodypart"
          className="w-[80px] h-[80px] object-contain"
        />
        <span className="capitalize font-semibold">{part}</span>
      </div>
    </div>
  );
};

export default BodyPart;

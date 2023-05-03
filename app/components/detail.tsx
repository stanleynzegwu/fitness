import Image from "next/image";
import { gymEquipment, bodyPartImage, targetImage } from "@/public/assets";
import { ExerciseDetail } from "../Types/interfaces";

const Detail = ({ exerciseDetail }: { exerciseDetail: ExerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: bodyPartImage,
      name: bodyPart,
    },
    {
      icon: targetImage,
      name: target,
    },
    {
      icon: gymEquipment,
      name: equipment,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row md:p-20 items-center justify-between gap-8">
      <Image
        src={gifUrl}
        alt={name}
        width={200}
        height={200}
        className="w-[300px] h-[300px] md:h-[350px] md:w-[350px] object-cover"
      />
      <div>
        <span className="inline-block uppercase font-bold text-2xl md:text-4xl mb-5">{name}</span>
        <p className="md:text-[18px] font-semibold">
          Exercises keep you strong. {name} is one of the best <br /> exercises to target your{" "}
          {target}. It will help you improve your
          <br /> mood and gain energy.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {extraDetail.map(({ icon, name }, index) => (
          <div key={index} className="flex gap-4 items-center">
            <Image
              src={icon}
              alt={name}
              className="w-[70px] h-[70px] p-2 rounded-full bg-[#EDD9E6]"
            />
            <span className="capitalize font-semibold">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;

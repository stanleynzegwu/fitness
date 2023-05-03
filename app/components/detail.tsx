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
    <div className="flex flex-col lg:flex-row p-20 items-center">
      <Image src={gifUrl} alt={name} width={200} height={200} />
      <div>
        <span>{name}</span>
        <p>
          Exercises keep you strong. {name} is one of the best <br /> exercises to target your{" "}
          {target}. It will help you improve your
          <br /> mood and gain energy.
        </p>
      </div>
      <div>
        {extraDetail.map(({ icon, name }, index) => (
          <div key={index}>
            <Image src={icon} alt={name} className="w-[40px] h-[40px]" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;

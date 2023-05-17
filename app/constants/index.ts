import type { StaticImageData } from "next/image";

import { back,cardio,chest,gym,neck,lowerArm,upperArm,lowerLeg,upperLeg,shoulder,waist } from "@/public/assets";

type BodyPartIcon = {
  [key: string]: StaticImageData;
};

const data = [
    [
      "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "Yoga",
    ],
    [
      "https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "Dance",
    ],
    [
      "https://images.pexels.com/photos/3822719/pexels-photo-3822719.jpeg?auto=compress&cs=tinysrgb&w=800",
      "Fitness",
    ],
    [
      "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "Yoga",
    ],
    [
      "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "Yoga",
    ],
  ];

  const bodyPartIcon: BodyPartIcon = {
    "all": gym,
    "back": back,
    "cardio": cardio,
    "chest": chest,
    "lower arms": lowerArm,
    "lower legs": lowerLeg,
    "neck": neck,
    "shoulders": shoulder,
    "upper arms": upperArm,
    "upper legs": upperLeg,
    "waist": waist
  }

  const exerciseDetailInitial = {
    bodyPart: "",
    gifUrl: "",
    name: "",
    target: "",
    equipment: "",
  }

  const pricing = {
    uniquePlan:[
    { plan: "weekly", price: "$299", duration: "1 week memebership card" },
    { plan: "monthly", price: "$499", duration: "3 months memebership card" },
    { plan: "yearly", price: "$999", duration: "1 year memebership card" },
  ],
    constantData: ["Spaces and group classes","No time limit","Whenever you like"]
  }
export { bodyPartIcon, data, exerciseDetailInitial, pricing }


import type { StaticImageData } from "next/image";

import { back,cardio,chest,neck,lowerArm,upperArm,lowerLeg,upperLeg,shoulder,waist } from "@/public/assets";

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
    "all": neck,
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

export { bodyPartIcon, data }


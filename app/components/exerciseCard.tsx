"use client";

import Link from "next/link";
import { Button, Stack, Typography } from "@mui/material";

interface ExerciseData {
  name: string;
  bodyPart: string;
  gifUrl: string;
  id: string;
  target: string;
}

const ExerciseCard = ({ data }: { data: ExerciseData }) => {
  const { name, bodyPart, target, gifUrl, id } = data;

  return (
    <Link
      className="p-2 bg-[#fff] exercise-card hover:scale-105 ease-in-out duration-300"
      href={`/exercise/${id}`}
    >
      <img src={gifUrl} alt={name} loading="lazy" />
      <div className="flex gap-4">
        <span className="bg-[#EDD9E6] min-w-40 px-4 py-2 text-[#000000] capitalize font-semibold rounded-full">
          {bodyPart}
        </span>
        <span className="bg-[#8DB3E5] min-w-40 px-4 py-2 text-[#000000] capitalize font-semibold rounded-full">
          {target}
        </span>
      </div>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        sx={{ fontSize: { lg: "24px", xs: "20px" } }}
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;

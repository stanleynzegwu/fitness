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
    // <Link href={`/exercise/${id}`}>
    //   <div>
    //     <img src={gifUrl} alt="exercise gif" loading="lazy" />
    //     <span>{name}</span>
    //     <span>{bodyPart}</span>
    //     <span>{target}</span>
    //   </div>
    // </Link>
    <Link className="exercise-card" href={`/exercise/${id}`}>
      <img src={gifUrl} alt={name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {target}
        </Button>
      </Stack>
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

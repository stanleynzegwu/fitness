"use client";

import { Detail, ExerciseVideos, BackButton } from "@/app/components";
import { exerciseDetailInitial } from "@/app/constants";

type Prop = {
  params: {
    id: string;
  };
};
import { useState, useEffect } from "react";
import { exerciseOptions, fetchData, youtubeOptions } from "../../utils/fetchData";

const Excerise = (props: Prop) => {
  const { id } = props.params;
  const [exerciseDetail, setExerciseDetail] = useState(exerciseDetailInitial);
  const [exerciseVideos, setExerciseVideos] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);
    };
    fetchExerciseData();
  }, [id]);

  return (
    <div className="p-8 min-h-screen flex flex-col gap-10 bg-[#f5faff]">
      <BackButton />
      {/* MAKE SURE YOU HAVE THE EXCERCISE DETAILS BEFORE RENDERING. I DID THIS BECAUSE OF ERROR I'M GETTING IN CONSOLE */}
      {exerciseDetail.gifUrl && <Detail exerciseDetail={exerciseDetail} />}
      {exerciseVideos.length > 1 && (
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      )}
    </div>
  );
};

export default Excerise;

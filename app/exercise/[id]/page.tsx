"use client";

import { Detail, ExerciseVideos, SimilarExercises } from "@/app/components";
import { exerciseDetailInitial } from "@/app/constants";
interface Prop {
  params: {
    id: string;
  };
}
import { useState, useEffect } from "react";
import { exerciseOptions, fetchData, youtubeOptions } from "../../utils/fetchData";

const Excerise = (props: Prop) => {
  const [exerciseDetail, setExerciseDetail] = useState(exerciseDetailInitial);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = props.params;
  console.log(exerciseVideos);

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

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equimentExercisesData);
    };
    fetchExerciseData();
  }, [id]);

  return (
    <div className="p-8 min-h-screen bg-red-200">
      {/* MAKE SURE YOU HAVE THE EXCERCISE DETAILS BEFORE RENDERING. I DID THIS BECAUSE OF ERROR I'M GETTING IN CONSOLE */}
      {exerciseDetail.gifUrl && <Detail exerciseDetail={exerciseDetail} />}
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises />
    </div>
  );
};

export default Excerise;

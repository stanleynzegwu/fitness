"use client";

import { useState, useEffect } from "react";
import { useSnapshot } from "valtio";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { state } from "../store";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { ButtonMedium, Exercises, HorizontalScrollBar } from "../components";

const SearchExercises = () => {
  const snap = useSnapshot(state);
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState<{}[] | []>(state.exercises);
  const [bodyParts, setBodyParts] = useState<string[]>([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState<string>(state.selectedBodyPart);
  const [exercisesPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  // FETCH THE BODY PARTS ONCE COMPONENT IS LOADED
  // useEffect(() => {
  //   const fetchExerciseData = async () => {
  //     const bodyPartsdata = await fetchData(
  //       "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  //       exerciseOptions
  //     );
  //     setBodyParts(["all", ...bodyPartsdata]);
  //   };
  //   fetchExerciseData();
  // }, []);
  console.log(state);
  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsdata = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      console.log("it rannn now");
      state.bodyParts = ["all", ...bodyPartsdata];
      setBodyParts(["all", ...bodyPartsdata]);
    };
    state.bodyParts.length < 1 ? fetchExerciseData() : setBodyParts(state.bodyParts);
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise: {
          name: string;
          bodyPart: string;
          abs: string;
          target: string;
          equipment: string;
        }) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );

      setSearch("");
      state.exercises = [...searchedExercises];
      setExercises(searchedExercises);
    }
  };
  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event: any, value: number) => {
    setCurrentPage(value);

    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exercisesData = [];
      console.log("effect ran");
      if (selectedBodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}`,
          exerciseOptions
        );
      }
      state.exercises = [...exercisesData];
      state.selectedBodyPart = selectedBodyPart;
      setExercises(exercisesData);
    };
    state.exercises.length < 1
      ? fetchExerciseData()
      : state.selectedBodyPart !== selectedBodyPart
      ? fetchExerciseData()
      : setExercises(state.exercises);
  }, [selectedBodyPart]);

  return (
    <div className="min-h-[200px] bg-gradient-to-br from-[#F7FDFF] to-[#FFF2F9]">
      <div className="text-left text-lg py-3 m-auto flex justify-center gap-4">
        <input
          className=" border-[1px] border-[#9D9EA2] focus:outline-none focus:border-[#483EEC] focus:text-[#042A5B] rounded-full  p-2 pl-4 w-[250px] sm:w-[450px]"
          type="text"
          placeholder="search exercises"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ButtonMedium
          text="Search"
          bgColor="bg-red-600"
          extraStyle="w-28 sm:32"
          handleEvent={handleSearch}
        />
      </div>

      <HorizontalScrollBar
        data={bodyParts}
        selectedBodyPart={selectedBodyPart}
        setSelectedBodyPart={setSelectedBodyPart}
      />
      {exercises.length > 1 && (
        <Exercises currentExercises={currentExercises} exercises={exercises} />
      )}
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </div>
  );
};

export default SearchExercises;

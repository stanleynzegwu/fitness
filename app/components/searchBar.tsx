"use client";

import { useState } from "react";

import { exerciseOptions, fetchData } from "../utils/fetchData";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);

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
          exercise.abs.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="search sxercises"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="rounded bg-red-600 px-9 py-2 text-white" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;

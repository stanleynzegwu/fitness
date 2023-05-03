import ExerciseCard from "./exerciseCard";

interface Props {
  currentExercises: any[];
  exercises: {}[];
}

const Excerises = ({ currentExercises, exercises }: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-12 mt-10">
      {exercises.length &&
        currentExercises.map((exercise, index) => <ExerciseCard data={exercise} key={index} />)}
    </div>
  );
};

export default Excerises;

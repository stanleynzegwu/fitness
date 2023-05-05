interface ExerciseDetail {
  bodyPart: string;
  gifUrl: string;
  name: string;
  target: string;
  equipment: string;
}

interface ExerciseData {
  name: string;
  bodyPart: string;
  gifUrl: string;
  id: string;
  target: string;
}

export type { ExerciseDetail, ExerciseData };

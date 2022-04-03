import axios from "axios";

export const API_LIMIT = 40;

export async function getExercises(offset, muscleGroup, exerciseName) {
  if (
    (muscleGroup === null || muscleGroup === undefined || muscleGroup === "") &&
    (exerciseName === null || exerciseName === undefined || exerciseName === "")
  ) {
    return await axios.get(
      `http://localhost:8080/api/exercise?page=${offset}&size=${API_LIMIT}`
    );
  } else if (
    exerciseName === null ||
    exerciseName === undefined ||
    exerciseName === ""
  ) {
    return await axios.get(
      `http://localhost:8080/api/exercise?page=${offset}&size=${API_LIMIT}&muscleGroup=${muscleGroup}`
    );
  } else if (
    muscleGroup === null ||
    muscleGroup === undefined ||
    muscleGroup === ""
  ) {
    return await axios.get(
      `http://localhost:8080/api/exercise?page=${offset}&size=${API_LIMIT}&exerciseName=${exerciseName}`
    );
  } else {
    return await axios.get(
      `http://localhost:8080/api/exercise?page=${offset}&size=${API_LIMIT}&muscleGroup=${muscleGroup}&exerciseName=${exerciseName}`
    );
  }
}

export async function getExerciseByUid(uid) {
  return await axios.get(`http://localhost:8080/api/exercise/uid/${uid}`);
}

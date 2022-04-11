import axios from "axios";

export async function getWorkoutsForUser() {
  const token = localStorage.getItem("accessToken");
  const bearerToken = `Bearer ${token}`;
  const config = {
    headers: {
      Authorization: bearerToken,
    },
  };
  return await axios.get("http://localhost:8080/api/workout", config);
}

export async function createWorkout(workout) {
  const token = localStorage.getItem("accessToken");
  const bearerToken = `Bearer ${token}`;
  const config = {
    headers: {
      Authorization: bearerToken,
    },
  };
  return await axios.post("http://localhost:8080/api/workout", workout, config);
}

export async function updateWorkout(uid, workout) {
  const token = localStorage.getItem("accessToken");
  const bearerToken = `Bearer ${token}`;
  const config = {
    headers: {
      Authorization: bearerToken,
    },
  };
  return await axios.put(
    `http://localhost:8080/api/workout/${uid}`,
    workout,
    config
  );
}

export async function deleteWorkoutByUid(uid) {
  const token = localStorage.getItem("accessToken");
  const bearerToken = `Bearer ${token}`;
  const config = {
    headers: {
      Authorization: bearerToken,
    },
  };
  return await axios.delete(`http://localhost:8080/api/workout/${uid}`, config);
}

export async function getWorkoutByUid(uid) {
  const token = localStorage.getItem("accessToken");
  const bearerToken = `Bearer ${token}`;
  const config = {
    headers: {
      Authorization: bearerToken,
    },
  };
  return await axios.get(`http://localhost:8080/api/workout/${uid}`, config);
}

export async function addExerciseToWorkout(uid, exercises) {
  const token = localStorage.getItem("accessToken");
  const bearerToken = `Bearer ${token}`;
  const config = {
    headers: {
      Authorization: bearerToken,
    },
  };
  return await axios.post(
    `http://localhost:8080/api/workout/${uid}`,
    exercises,
    config
  );
}

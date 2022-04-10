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

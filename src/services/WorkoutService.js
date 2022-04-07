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

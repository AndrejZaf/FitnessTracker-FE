import axios from "axios";
import qs from "qs";

export async function login(username, password) {
  return await axios.post(
    "http://localhost:8080/api/login",
    qs.stringify({ username: username, password: password })
  );
}

export async function signup(username, password, measurementSystem) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await axios.post(
    "http://localhost:8080/api/user",
    {
      email: username,
      password: password,
      measurementSystem: measurementSystem,
    },
    config
  );
}

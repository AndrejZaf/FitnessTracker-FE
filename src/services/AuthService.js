import axios from "axios";
import qs from "qs";

export async function login(username, password) {
  return await axios.post(
    "http://localhost:8080/api/login",
    qs.stringify({ username: username, password: password })
  );
}

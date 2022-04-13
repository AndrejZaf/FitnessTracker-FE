import axios from "axios";

export async function retrieveUser() {
  const token = localStorage.getItem("accessToken");
  const bearerToken = `Bearer ${token}`;
  const config = {
    headers: {
      Authorization: bearerToken,
    },
  };
  return await axios.get("http://localhost:8080/api/user/logged-user", config);
}

export async function verifyUserByCode(code) {
  return await axios.post(`http://localhost:8080/api/user/verify/${code}`);
}

export async function requestVerificationEmail(email) {
  const emailRequest = {
    email,
  };
  return await axios.post(
    `http://localhost:8080/api/user/verify`,
    emailRequest
  );
}

export async function requestResetPasswordEmail(email) {
  const emailRequest = {
    email,
  };
  return await axios.post(
    `http://localhost:8080/api/user/reset-password`,
    emailRequest
  );
}

export async function resetPassword(code, password) {
  const passwordRequest = {
    code,
    password,
  };
  return await axios.post(
    `http://localhost:8080/api/user/reset-password/${code}`,
    passwordRequest
  );
}

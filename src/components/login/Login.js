import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/AuthService";
import { retrieveUser } from "../../services/UserService";
import "./Login.css";

export default function Login() {
  const [redirect, setRedirect] = useState(false);
  console.log(redirect);
  if (redirect) {
    retrieveUserDetails();
  }
  function loginCall(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password).then(
      (response) => {
        let accessToken = response.data.accessToken;
        let refreshToken = response.data.refreshToken;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        retrieveUser().then((response) => {
          console.log(response);
        });
      },
      (error) => console.log("Error")
    );
  }

  function retrieveUserDetails() {}

  return (
    <div className="custom-background d-flex align-items-center">
      <div className="container custom-container-login">
        <h1 className="text-center text-white">Welcome Back!</h1>
        <form className="custom-form mb-3" onSubmit={(e) => loginCall(e)}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control custom-form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
            />
            <label for="email">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control custom-form-control"
              id="password"
              name="password"
              placeholder="Password"
            />
            <label for="password">Password</label>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label
                className="form-check-label text-white"
                for="exampleCheck1"
              >
                Remember me
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary purple-button button-custom-size"
          >
            Log In
          </button>
        </form>
        <div className="text-end">
          <Link to="/forgot-password" className="text-white">
            Forgot Password?
          </Link>
        </div>
        <hr className="text-white" />
        <div className="sign-up-part text-center">
          <span className="text-white">
            Don't have an account?{" "}
            <Link to="signup" className="text-white">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

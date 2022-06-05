import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/AuthService";
import { retrieveUser } from "../../services/UserService";
import { setCurrentUser, toggleLoading } from "../../store/StoreFacade";
import errorCodes from "../../services/ErrorService";
import "./Login.css";
import { storeTokens } from "../../services/StorageService";

export default function Login(props) {
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(false);

  function onEmailFieldChange(fieldValue) {
    if (hasError) {
      setHasError(false);
      setErrorMessage("");
      setVerificationStatus(false);
    }
    setEmailField(fieldValue);
  }

  function onPasswordFieldChange(fieldValue) {
    if (hasError) {
      setHasError(false);
      setErrorMessage("");
      setVerificationStatus(false);
    }
    setPasswordField(fieldValue);
  }

  function checkButtonAvailability() {
    return emailField === "" || passwordField === "";
  }

  function loginCall(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const rememberMe = e.target.rememberMe.checked;
    toggleLoading();
    login(email, password)
      .then((response) => {
        let accessToken = response.data.accessToken;
        let refreshToken = response.data.refreshToken;
        // if (rememberMe) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        // } else {
        // sessionStorage.setItem("accessToken", accessToken);
        // sessionStorage.setItem("refreshToken", refreshToken);
        // }
        retrieveUser().then((response) => {
          setCurrentUser(response.data);
          props.history.push("/");
        });
      })
      .catch((error) => {
        const actualError = { ...error };
        const errorKey = actualError.response.data;
        if (errorKey === "USER_NOT_VERIFIED") {
          setVerificationStatus(true);
        }
        setHasError(true);
        setErrorMessage(errorCodes(errorKey));
      })
      .finally(() => toggleLoading());
  }

  return (
    <div className="custom-background d-flex align-items-center">
      <div className="container custom-container-login">
        <h1 className="text-center text-white">Welcome back!</h1>
        <form className="custom-form mb-3" onSubmit={(e) => loginCall(e)}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control custom-form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
              onChange={(e) => onEmailFieldChange(e.target.value)}
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control custom-form-control"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => onPasswordFieldChange(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>
          {/* <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="rememberMe"
                id="rememberMe"
              />
              <label
                className="form-check-label text-white"
                htmlFor="rememberMe"
              >
                Remember me
              </label>
            </div>
          </div> */}
          {hasError ? <p className="text-red">{errorMessage}</p> : ""}
          {verificationStatus ? (
            <p>
              <Link to="/verify" className="text-white">
                Request a new verification code
              </Link>
            </p>
          ) : (
            ""
          )}
          <button
            type="submit"
            className="btn btn-primary purple-button button-custom-size"
            disabled={checkButtonAvailability()}
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

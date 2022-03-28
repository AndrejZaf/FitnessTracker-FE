import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../services/AuthService";
import errorCodes from "../../services/ErrorService";
import { toggleLoading } from "../../store/StoreFacade";
import SignUpModal from "../sign-up-modal/SignUpModal";
import "./SignUp.css";

export default function SignUp(props) {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowmodal] = useState(false);
  const [emailField, setEmailField] = useState("");
  const [emailFieldError, setEmailFieldError] = useState(false);
  const [emailFieldErrorMessage, setEmailFieldErrorMessage] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [passwordFieldError, setPasswordFieldError] = useState(false);
  const [passwordFieldMessage, setPasswordFieldMessage] = useState("");
  const [confirmPasswordField, setConfirmPasswordField] = useState("");
  const [measurementSystemField, setMeasurementSystemField] = useState("");

  function handleOnHideModal() {
    props.history.push("/login");
  }

  function onEmailFieldChange(fieldValue) {
    if (emailFieldError || hasError) {
      setEmailFieldError(false);
      setEmailFieldErrorMessage("");
      setHasError(false);
      setErrorMessage("");
    }
    setEmailField(fieldValue);
  }

  function onPasswordFieldChange(fieldValue) {
    if (passwordFieldError || hasError) {
      setPasswordFieldError(false);
      setPasswordFieldMessage("");
      setHasError(false);
      setErrorMessage("");
    }
    setPasswordField(fieldValue);
  }

  function onConfirmPasswordFieldChange(fieldValue) {
    if (hasError) {
      setHasError(false);
      setErrorMessage("");
    }
    setConfirmPasswordField(fieldValue);
  }

  function onMeasurementFieldChange(fieldValue) {
    setMeasurementSystemField(fieldValue);
  }

  function determineButtonAvailability() {
    return (
      hasError ||
      emailFieldError ||
      passwordFieldError ||
      emailField === "" ||
      passwordField === "" ||
      confirmPasswordField === "" ||
      measurementSystemField === ""
    );
  }

  function signUp(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmedPassword = e.target.confirmPassword.value;
    const measurementSystem = e.target.btnradio.value;
    if (password !== confirmedPassword) {
      setHasError(true);
      setErrorMessage("The password does not match!");
      return;
    }

    toggleLoading();
    signup(email, password, measurementSystem)
      .then(() => {
        setShowmodal(true);
        setEmailField(email);
      })
      .catch((error) => {
        const actualError = { ...error };
        const errorKey = actualError.response.data;
        // const status = actualError.response.status;
        setHasError(true);
        setErrorMessage(errorCodes(errorKey));
      })
      .finally(() => toggleLoading());
  }
  return (
    <>
      {showModal ? (
        <SignUpModal
          show={showModal}
          onHide={() => handleOnHideModal()}
          email={emailField}
        ></SignUpModal>
      ) : (
        ""
      )}
      <div className="custom-background d-flex align-items-center">
        <div className="container custom-container-login">
          <h1 className="text-center text-white">
            Create your free account and level up your fitness game!
          </h1>
          <form className="custom-form mb-3" onSubmit={(e) => signUp(e)}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control custom-form-control"
                id="email"
                name="email"
                onChange={(e) => onEmailFieldChange(e.target.value)}
                placeholder="name@example.com"
              />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control custom-form-control"
                id="password"
                placeholder="Password"
                onChange={(e) => onPasswordFieldChange(e.target.value)}
                name="password"
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control custom-form-control"
                id="confirmPassword"
                name="confirmPassword"
                onChange={(e) => onConfirmPasswordFieldChange(e.target.value)}
                placeholder="Confirm your password"
              />
              <label htmlFor="confirmPassword">Confirm your password</label>
            </div>
            <div className="mb-3 text-center">
              <p>Measurement System</p>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  value="METRIC_SYSTEM"
                  onChange={(e) => onMeasurementFieldChange(e.target.value)}
                  autoComplete="off"
                />
                <label className="btn btn-light" htmlFor="btnradio1">
                  Metric
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  value="IMPERIAL_SYSTEM"
                  id="btnradio2"
                  onChange={(e) => onMeasurementFieldChange(e.target.value)}
                  autoComplete="off"
                />
                <label className="btn btn-light" htmlFor="btnradio2">
                  Imperial
                </label>
              </div>
            </div>
            {/* PRIVACY POLICY DONT FORGET ABOUT THIS */}
            {hasError ? <p className="text-red">{errorMessage}</p> : ""}
            <button
              type="submit"
              className="btn btn-primary purple-button button-custom-size mt-3"
              disabled={determineButtonAvailability()}
            >
              Sign Up
            </button>
            <div className="text-center">
              <small className="text-white">
                By signing up you agree to our{" "}
                <Link to="/privacy-policy" className="text-white fw-bold">
                  privacy policy
                </Link>{" "}
                and{" "}
                <Link to="/terms-and-conditions" className="text-white fw-bold">
                  terms & conditions
                </Link>
                .
              </small>
            </div>
          </form>
          <div className="text-end">
            <Link to="/forgot-password" className="text-white">
              Forgot Password?
            </Link>
          </div>
          <hr className="text-white" />
          <div className="sign-up-part text-center">
            <span className="text-white">
              Already have an account?{" "}
              <Link to="login" className="text-white">
                Log In
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

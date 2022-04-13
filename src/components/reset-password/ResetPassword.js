import React, { useState } from "react";
import { Link } from "react-router-dom";
import { resetPasswordToast } from "../../services/ToastService";
import { resetPassword } from "../../services/UserService";
import ResetPasswordModal from "./../reset-password-modal/ResetPasswordModal";

export default function ResetPassword(props) {
  const token = props.match.params.uid;
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState("");

  function handleSuccessfulPasswordReset() {
    props.history.push("/login");
  }

  function handleResetPasswordRequest(event) {
    event.preventDefault();
    if (password !== confirmedPassword) {
      setError(true);
      setErrorMessage("Passwords do not match");
    }

    resetPasswordToast(
      resetPassword(token, password)
        .then(() => setShowModal(true))
        .catch(() => {
          setError(true);
          setErrorMessage("An error occurred, try again later");
        })
    );
  }

  function checkButtonAvailability() {
    return password === "" || confirmedPassword === "";
  }
  return (
    <>
      <ResetPasswordModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleSuccessfulPasswordReset={handleSuccessfulPasswordReset}
      />
      <div className="custom-background d-flex align-items-center">
        <div className="container custom-container-login">
          <h1 className="text-center text-white">Reset Your Password!</h1>
          <form
            className="custom-form mb-3"
            onSubmit={(e) => handleResetPasswordRequest(e)}
          >
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control custom-form-control"
                id="password"
                name="password"
                placeholder="Enter new password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control custom-form-control"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                onChange={(e) => {
                  setConfirmedPassword(e.target.value);
                  setError(false);
                }}
              />
              <label htmlFor="confirmPassword">Confirm Your Password</label>
            </div>
            {error ? <p className="text-red">{errorMessage}</p> : ""}
            <button
              type="submit"
              className="btn btn-primary purple-button button-custom-size"
              disabled={checkButtonAvailability()}
            >
              Reset Password
            </button>
          </form>
          <div className="text-end">
            <Link to="/login" className="text-white">
              Already have an account? Login
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
    </>
  );
}

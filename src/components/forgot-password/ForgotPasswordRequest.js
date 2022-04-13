import React, { useState } from "react";
import { Link } from "react-router-dom";
import { requestResetPasswordToken } from "../../services/ToastService";
import { requestResetPasswordEmail } from "../../services/UserService";
import errorCodes from "../../services/ErrorService";
import ForgotPasswordModal from "../forgot-password-modal/ForgotPasswordModal";

export default function ForgotPasswordRequest(props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleClosedModal() {
    props.history.push("/login");
  }

  function handleResetPasswordRequest(event) {
    event.preventDefault();

    requestResetPasswordToken(
      requestResetPasswordEmail(email)
        .then(() => setShowModal(true))
        .catch((error) => {
          const actualError = { ...error };
          const errorKey = actualError.response.data;
          setError(true);
          setErrorMessage("An error occurred, please try again");
        })
    );
  }

  function checkButtonAvailability() {
    return email === "";
  }

  return (
    <>
      <ForgotPasswordModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleClosedModal={handleClosedModal}
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
                type="email"
                className="form-control custom-form-control"
                id="email"
                name="email"
                placeholder="name@example.com"
                onChange={(e) => {
                  setError(false);
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="email">Email address</label>
            </div>
            {error ? <p className="text-red">{errorMessage}</p> : ""}
            <button
              type="submit"
              className="btn btn-primary purple-button button-custom-size"
              disabled={checkButtonAvailability()}
            >
              Request Password Reset
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

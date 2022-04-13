import React, { useState } from "react";
import { Link } from "react-router-dom";
import { requestVerificationToken } from "../../services/ToastService";
import { requestVerificationEmail } from "../../services/UserService";
import errorCodes from "./../../services/ErrorService";
import SignUpModal from "./../sign-up-modal/SignUpModal";

export default function VerificationRequest(props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function checkButtonAvailability() {
    return email === "";
  }

  function handleVerificationRequest(event) {
    event.preventDefault();

    requestVerificationToken(
      requestVerificationEmail(email)
        .then(() => setShowModal(true))
        .catch((error) => {
          const actualError = { ...error };
          const errorKey = actualError.response.data;
          setError(true);
          setErrorMessage(errorCodes(errorKey));
        })
    );
  }

  function handleOnHideModal() {
    props.history.push("/login");
  }

  return (
    <>
      <SignUpModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleOnHideModal={handleOnHideModal}
      />
      <div className="custom-background d-flex align-items-center">
        <div className="container custom-container-login">
          <h1 className="text-center text-white">Verify Your Account!</h1>
          <form
            className="custom-form mb-3"
            onSubmit={(e) => handleVerificationRequest(e)}
          >
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control custom-form-control"
                id="email"
                name="email"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email address</label>
            </div>
            {error ? <p className="text-red">{errorMessage}</p> : ""}
            <button
              type="submit"
              className="btn btn-primary purple-button button-custom-size"
              disabled={checkButtonAvailability()}
            >
              Request Verification
            </button>
          </form>
          <div className="text-end">
            <Link to="/login" className="text-white">
              Already verified? Login
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

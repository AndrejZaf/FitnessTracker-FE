import React, { useEffect, useState } from "react";
import { verifyUserByCode } from "../services/UserService";
import { toggleLoading } from "./../store/StoreFacade";
import verificationGirl from "../static/successful-verification.png";
import { Link } from "react-router-dom";
import PageNotFound from "./PageNotFound";

export default function EmailVerification(props) {
  const [verificationStatus, setVerificationStatus] = useState(false);
  const verificationToken = props.match.params.uid;

  useEffect(
    () =>
      verifyUserByCode(verificationToken)
        .then(() => {
          toggleLoading();
          setVerificationStatus(true);
        })
        .catch((error) => {
          setVerificationStatus(false);
        })
        .finally(() => toggleLoading()),
    [verificationToken]
  );
  return (
    <>
      <div className="verification-header text-white d-flex justify-content-center">
        <div className="align-self-center ">
          {verificationStatus ? (
            <h1>Verification Phase</h1>
          ) : (
            <h1>We cannot find the desired resource</h1>
          )}
        </div>
      </div>
      <div className="bottom-container">
        <div className="container mt-4 text-center">
          {verificationStatus ? (
            <>
              <img
                src={verificationGirl}
                alt="succesful-verification"
                className="img-fluid verification-image"
              />
              <h2>
                Congratulations your account has been successfully verified!
              </h2>
              <p>
                Feel free to log in, create your own desired workout with your
                favorite exercises! Also remember that you can share your
                <br />
                workouts with your friends, and always spread the positive
                energy!
              </p>
              <Link to="/login" className="btn btn-primary purple-button">
                Login
              </Link>
            </>
          ) : (
            <PageNotFound />
          )}
        </div>
      </div>
    </>
  );
}

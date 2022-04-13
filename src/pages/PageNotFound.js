import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as ErrorImage } from "../static/error-page-artwork.svg";

export default function PageNotFound() {
  let history = useHistory();
  function handleOnClick() {
    if (history.location.key === undefined) {
      history.push("/");
    } else {
      history.goBack();
    }
  }
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="artwork">
            <ErrorImage className="artwork-size" />
          </div>
          <div className="error-text align-self-center">
            <h1>
              <strong>Oops!</strong>
            </h1>
            <h4>We can't seem to find the page you're looking for.</h4>
            <h6>
              <strong>Error Code: 404</strong>
            </h6>
            <button
              onClick={handleOnClick}
              className="btn btn-primary purple-button"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { useHistory } from "react-router-dom";
import "./BackButton.css";

export default function BackButton() {
  let history = useHistory();
  function handleOnClick() {
    if (history.location.key === undefined) {
      history.push("/");
    } else {
      history.goBack();
    }
  }
  return (
    <div className="back-button" onClick={handleOnClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fillRule="currentColor"
        className="bi bi-chevron-left"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        />
      </svg>
    </div>
  );
}

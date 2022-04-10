import React from "react";

export default function FocusModeButton() {
  return (
    <div
      className="focus-mode-button"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title="Focus Mode"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fillRule="currentColor"
        className="bi bi-play-fill"
        viewBox="0 0 16 16"
      >
        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
      </svg>
    </div>
  );
}
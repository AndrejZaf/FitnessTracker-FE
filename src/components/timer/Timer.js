import React from "react";
import { useTimer } from "react-timer-hook";

export default function Timer({
  expiryTimestamp,
  goToNextSetOrExercise,
  setInitiateTimer,
}) {
  const { minutes, seconds, isRunning, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      setInitiateTimer(false);
      goToNextSetOrExercise();
    },
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{seconds + minutes * 60}</span>
      </div>
      <button
        className="btn btn-primary purple-button"
        onClick={() => {
          // Restarts to 5 minutes timer
          setInitiateTimer(false);
          goToNextSetOrExercise();
        }}
      >
        Skip Rest Period
      </button>
    </div>
  );
}

import React from "react";
import VerticalGripButton from "../add-workout/vertical-grip-button/VerticalGripButton";

export default function WorkoutRow({
  workout,
  setSelectedWorkout,
  changeSection,
  section,
}) {
  return (
    <div
      className="d-flex align-items-center mb-2 workout-row"
      onClick={() => {
        changeSection("Exercise");
        setSelectedWorkout(workout);
      }}
    >
      <div className="align-self-center">
        <VerticalGripButton />
      </div>
      <div className="align-self-center">{workout.name}</div>
    </div>
  );
}

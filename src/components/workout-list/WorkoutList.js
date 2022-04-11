import React from "react";
import WorkoutRow from "../workout-row/WorkoutRow";

export default function WorkoutList({
  workouts,
  setSelectedWorkout,
  changeSection,
  section,
}) {
  return (
    <div className="workout-list">
      {workouts.map((workout, index) => (
        <WorkoutRow
          key={index}
          workout={workout}
          setSelectedWorkout={setSelectedWorkout}
          changeSection={changeSection}
          section={section}
        />
      ))}
    </div>
  );
}

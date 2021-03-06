import React from "react";
import { deleteWorkoutByUid } from "../../services/WorkoutService";
import DeleteButton from "../delete-button/DeleteButton";
import EditButton from "../edit-button/EditButton";
import FocusModeButton from "../focus-mode-button/FocusModeButton";
import PreviewButton from "../preview-button/PreviewButton";
import ShareButton from "../ShareButton/ShareButton";
import { toggleLoading } from "./../../store/StoreFacade";
import { deleteWorkoutByUid as storeDeleteWorkoutByUid } from "./../../store/StoreFacade";

export default function WorkoutsTable({
  workouts,
  handleAddWorkoutButton,
  setEditWorkout,
  setFocusMode,
  setStartFocusMode,
  setWorkoutUid,
  setDeleteShowModal,
  setWorkoutToDelete,
}) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Workout Name</th>
          <th scope="col">Number of Exercises</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {workouts.map((workout, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{workout.name}</td>
            <td>{workout.exercises.length}</td>
            <td className="d-flex justify-content-end">
              <FocusModeButton
                workoutUid={workout.uid}
                setFocusMode={setFocusMode}
                setStartFocusMode={setStartFocusMode}
                setWorkoutUid={setWorkoutUid}
              />
              <PreviewButton workoutUid={workout.uid} />
              <ShareButton workoutUid={workout.uid} />
              <EditButton
                handleAddWorkoutButton={handleAddWorkoutButton}
                workout={workout}
                setEditWorkout={setEditWorkout}
              />
              <DeleteButton
                uid={workout.uid}
                workoutName={workout}
                setWorkoutToDelete={setWorkoutToDelete}
                setDeleteShowModal={setDeleteShowModal}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

import React from "react";
import VerticalGripButton from "./../vertical-grip-button/VerticalGripButton";
import DeleteRowButton from "./../delete-row-button/DeleteRowButton";
import EditRowButton from "./../edit-row-button/EditRowButton";

export default function ExerciseRow({
  provided,
  snapshot,
  exercise,
  deleteRow,
  changeSection,
  setSetItems,
  setSelectedExercise,
  setEditExercise,
}) {
  return (
    <div
      className="d-flex justify-content-between mt-2"
      ref={provided.innerRef}
      snapshot={snapshot}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div>
        <VerticalGripButton />
      </div>
      <div>{exercise.name}</div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
          <EditRowButton
            exercise={exercise}
            setSetItems={setSetItems}
            setSelectedExercise={setSelectedExercise}
            changeSection={changeSection}
            setEditExercise={setEditExercise}
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
          <DeleteRowButton deleteRow={deleteRow} />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import AddExerciseButton from "./../../add-exercise-button/AddExerciseButton";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ExerciseRow from "../exercise-row/ExerciseRow";

export default function AddWorkoutGeneral({
  exercises,
  setExercises,
  changeSection,
  setSelectedExercise,
  setSetItems,
  setEditExercise,
  setWorkoutName,
  workoutName,
}) {
  const onDragEnd = (result) => {
    if (exercises.length === 1 || result.destination === null) return;
    const newItems = exercises;
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    setExercises(newItems);
  };

  const deleteRow = (index) => {
    const list = [...exercises];
    list.splice(index, 1);
    setExercises(list);
  };

  return (
    <>
      <form className="add-workout-form mb-3">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="workout-name"
            name="workout-name"
            placeholder="Workout Name"
            value={workoutName}
            onChange={(e) => {
              setWorkoutName(e.target.value);
            }}
            autoFocus={true}
          />
          <label htmlFor="workout-name">Workout Name</label>
        </div>
      </form>
      <div className="exercises-container">
        <div className="border-bottom">
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="mb-2">Selected Exercises</h5>
            </div>
            <div>
              <AddExerciseButton
                onClickHandler={() => changeSection("Add Exercise")}
              />
            </div>
          </div>
        </div>
        {exercises.length === 0 ? (
          <p className="mt-3">
            There are currently no exercises, you can proceed and save the
            current workout or add multiple exercises
          </p>
        ) : (
          <div className="exercises-list">
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {exercises.map((exercise, index) => (
                      <Draggable
                        key={index}
                        draggableId={`${index}`}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <ExerciseRow
                            provided={provided}
                            snapshot={snapshot}
                            exercise={exercise}
                            deleteRow={() => deleteRow(index)}
                            changeSection={changeSection}
                            setSetItems={setSetItems}
                            setSelectedExercise={setSelectedExercise}
                            setEditExercise={setEditExercise}
                          />
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        )}
      </div>
    </>
  );
}

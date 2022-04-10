import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import "./AddWorkout.css";
import AddWorkoutGeneral from "./general/AddWorkoutGeneral";
import AddExercise from "./add-exercise/AddExercise";
import ExerciseSets from "./exericse-sets/ExerciseSets";
import ModalHeader from "./modal-header/ModalHeader";
import { createWorkout } from "../../services/WorkoutService";
import { toggleLoading, updateUserWorkouts } from "./../../store/StoreFacade";

// Implement Edit and Focus Moded
export default function AddWorkout({ showModal, hideModal, workout }) {
  const dummyRow = {
    id: "1",
    weight: "",
    reps: "",
    restPeriod: "",
  };
  const [show, setShow] = useState(showModal);
  const [exercises, setExercises] = useState([]);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [section, setSection] = useState("General");
  const [selectedExercise, setSelectedExercise] = useState({});
  const [setIndex, setSetIndex] = useState(1);
  const [setItems, setSetItems] = useState([dummyRow]);
  const [editExercise, setEditExercise] = useState({});
  const [workoutName, setWorkoutName] = useState("");

  const handleClose = () => {
    hideModal();
    setShow(false);
  };

  function switchSection(newSection) {
    if (
      section === "Exercise" &&
      newSection === "General" &&
      Object.keys(editExercise).length !== 0
    ) {
      setEditExercise({});
      setSetItems([dummyRow]);
      setSetIndex(1);
    }
    setSection(newSection);
  }

  function selectExercise(exercise) {
    setSelectedExercise(exercise);
  }

  function submitWorkoutCreation() {
    let workout = {
      name: workoutName,
      exercises: exercises,
    };
    toggleLoading();
    createWorkout(workout)
      .then((response) => {
        workout = { ...workout, uid: response.data.uid };
        updateUserWorkouts(workout);
      })
      .finally(() => toggleLoading());
    setShow(false);
  }

  function renderTitle(section) {
    switch (section) {
      case "General":
        return <ModalHeader text={"Create Your Own Workout"} />;
      case "Add Exercise":
        return (
          <ModalHeader
            text={"Select an Exercise"}
            backButton={true}
            changeSection={switchSection}
            section="General"
          />
        );
      case "Exercise":
        return (
          <ModalHeader
            text={selectedExercise.name}
            backButton={true}
            changeSection={switchSection}
            section={
              Object.keys(editExercise).length === 0
                ? "Add Exercise"
                : "General"
            }
          />
        );
      default:
        return "";
    }
  }

  function renderBody(section) {
    switch (section) {
      case "General":
        return (
          <AddWorkoutGeneral
            exercises={exercises}
            setExercises={setExercises}
            setSelectedExercise={setSelectedExercise}
            setSetItems={setSetItems}
            setEditExercise={setEditExercise}
            setWorkoutName={setWorkoutName}
            workoutName={workoutName}
            changeSection={switchSection}
          />
        );
      case "Add Exercise":
        return (
          <AddExercise
            changeSection={switchSection}
            selectExercise={selectExercise}
          />
        );
      case "Exercise":
        return (
          <ExerciseSets
            exercise={selectedExercise}
            setItems={setItems}
            setSetItems={setSetItems}
            setIndex={setIndex}
            setSetIndex={setSetIndex}
            editExercise={editExercise}
          />
        );
      default:
        return "";
    }
  }

  function renderFooter(section) {
    switch (section) {
      case "General":
        return (
          <>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={submitWorkoutCreation}
              className="purple-button"
            >
              Save Changes
            </Button>
          </>
        );
      case "Add Exercise":
        return (
          <>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </>
        );
      case "Exercise":
        return (
          <>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setExerciseIndex(exerciseIndex + 1);
                if (Object.keys(editExercise).length === 0) {
                  setExercises([
                    ...exercises,
                    {
                      id: exerciseIndex,
                      uid: selectedExercise.uid,
                      name: selectedExercise.name,
                      sets: [...setItems],
                    },
                  ]);
                } else {
                  selectedExercise.sets = setItems;
                }
                setEditExercise({});
                setSetItems([dummyRow]);
                setSetIndex(1);
                switchSection("General");
              }}
              className="purple-button"
            >
              Add Exercise
            </Button>
          </>
        );
      default:
        return "";
    }
  }

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      size="lg"
      centered
    >
      <Modal.Header closeButton>{renderTitle(section)}</Modal.Header>
      <Modal.Body>{renderBody(section)}</Modal.Body>
      <Modal.Footer>{renderFooter(section)}</Modal.Footer>
    </Modal>
  );
}

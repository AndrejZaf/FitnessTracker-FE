import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import ModalHeader from "../add-workout/modal-header/ModalHeader";
import store from "../../store/Store";
import WorkoutList from "./../workout-list/WorkoutList";
import "./AddExerciseWorkout.css";
import ExerciseSets from "../add-workout/exericse-sets/ExerciseSets";
import { addExerciseToWorkout } from "../../services/WorkoutService";
import { toggleLoading } from "./../../store/StoreFacade";
import { addExerciseToWorkout as storeAddExerciseToWorkout } from "./../../store/StoreFacade";

export default function AddExerciseWorkout({ exercise, show, setShow }) {
  const dummyRow = {
    id: "1",
    weight: "",
    reps: "",
    restPeriod: "",
  };
  const [section, setSection] = useState("Select Workout");
  const [workouts, setWorkouts] = useState([]);
  const [setIndex, setSetIndex] = useState(1);
  const [setItems, setSetItems] = useState([dummyRow]);
  const [selectedWorkout, setSelectedWorkout] = useState({});

  useEffect(() => {
    setWorkouts(store.getState().currentUser.workouts);
    const unsubscribe = store.subscribe(() => {
      setWorkouts(store.getState().currentUser.workouts);
    });
    return unsubscribe;
  }, []);

  const handleClose = () => {
    setShow(false);
    setSection("Select Workout");
  };

  function switchSection(newSection) {
    setSection(newSection);
    setSetItems([dummyRow]);
    setSetIndex(1);
  }

  function updateWorkout() {
    const exerciseToBeAdded = {
      exercises: [
        {
          uid: exercise.uid,
          name: exercise.name,
          sets: setItems,
        },
      ],
    };
    toggleLoading();
    addExerciseToWorkout(selectedWorkout.uid, exerciseToBeAdded)
      .then(() => console.log("Added"))
      .finally(() => {
        toggleLoading();
        storeAddExerciseToWorkout(
          selectedWorkout.uid,
          exerciseToBeAdded.exercises[0]
        );
        setShow(false);
      });
  }

  function renderTitle(section) {
    switch (section) {
      case "Select Workout":
        return <ModalHeader text={"Select a Workout"} />;
      case "Exercise":
        return (
          <ModalHeader
            text={`${selectedWorkout.name} - ${exercise.name}`}
            backButton={true}
            changeSection={switchSection}
            section="Select Workout"
          />
        );
      default:
        return "";
    }
  }

  function renderBody(section) {
    switch (section) {
      case "Select Workout":
        return (
          <WorkoutList
            workouts={workouts}
            setSelectedWorkout={setSelectedWorkout}
            changeSection={switchSection}
            section="Select Workout"
          />
        );
      case "Exercise":
        return (
          <ExerciseSets
            exercise={exercise}
            setItems={setItems}
            setSetItems={setSetItems}
            setIndex={setIndex}
            setSetIndex={setSetIndex}
          />
        );
      default:
        return "";
    }
  }

  function renderFooter(section) {
    switch (section) {
      case "Select Workout":
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
              className="purple-button"
              onClick={() => updateWorkout()}
            >
              Save Exercise
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

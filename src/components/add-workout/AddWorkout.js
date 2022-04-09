import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import "./AddWorkout.css";
import AddWorkoutGeneral from "./general/AddWorkoutGeneral";
import AddExercise from "./add-exercise/AddExercise";
import ExerciseSets from "./exericse-sets/ExerciseSets";
import ModalHeader from "./modal-header/ModalHeader";

export default function AddWorkout({ showModal, test }) {
  const dummyRow = {
    id: "1",
    weight: "",
    reps: "",
    restPeriod: "",
  };
  const [show, setShow] = useState(showModal);
  const [exercises, setExercises] = useState([]);
  const [section, setSection] = useState("General");
  const [selectedExercise, setSelectedExercise] = useState({});
  const [setIndex, setSetIndex] = useState(1);
  const [setItems, setSetItems] = useState([dummyRow]);
  const [editExercise, setEditExercise] = useState({});

  const handleClose = () => {
    test();
    setShow(false);
  };

  function switchSection(newSection) {
    setSection(newSection);
  }

  function selectExercise(exercise) {
    setSelectedExercise(exercise);
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
            section="Add Exercise"
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
              onClick={handleClose}
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
                setExercises([
                  ...exercises,
                  {
                    uid: selectedExercise.uid,
                    name: selectedExercise.name,
                    sets: [...setItems],
                  },
                ]);
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

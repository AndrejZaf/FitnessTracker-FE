import React, { useEffect, useState } from "react";
import { getExerciseByUid } from "../../services/ExerciseService";
import AddWorkoutButton from "../add-workout-button/AddWorkout";
import BackButton from "../back-button/BackButton";
import "./ExerciseDetails.css";
import store from "../../store/Store";
import EmptyButton from "../empty-button/EmptyButton";
import AddExerciseWorkout from "../add-exercise-to-workout/AddExerciseWorkout";

export default function ExerciseDetails(props) {
  const [exercise, setExercise] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [show, setShow] = useState(false);
  const exerciseUid = props.match.params.uid;

  useEffect(() => {
    setIsLoggedIn(store.getState().isLoggedIn);
    const unsubscribe = store.subscribe(() => {
      setIsLoggedIn(store.getState().isLoggedIn);
    });

    getExerciseByUid(exerciseUid).then((response) =>
      setExercise(response.data)
    );

    return unsubscribe;
  }, [exerciseUid]);

  return (
    <>
      <AddExerciseWorkout show={show} setShow={setShow} exercise={exercise} />
      <div className="page-header-exercises text-white d-flex justify-content-between">
        <div className="ms-5 mt-3">
          <BackButton />
        </div>
        <div className="align-self-center">
          <h1>{exercise.name}</h1>
        </div>
        <div className="me-5 mt-3">
          {isLoggedIn ? (
            <AddWorkoutButton setShow={setShow} />
          ) : (
            <EmptyButton />
          )}
        </div>
      </div>
      <div className="bottom-container">
        <div className="container">
          <div className="text-center">
            <img src={exercise.image} />
          </div>
          <hr />
          <div className="exercise-description">
            <h4>Key Characteristics</h4>
            <div className="row mb-3">
              <div className="col-md-4 left-text">Activated Body Part:</div>
              <div className="col-md-8 right-text">{exercise.bodyPart}</div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4 left-text">Target Muscle:</div>
              <div className="col-md-8 right-text">{exercise.target}</div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4 left-text">Equipment:</div>
              <div className="col-md-8 right-text">{exercise.equipment}</div>
            </div>
            <br />
            <h4>Valuable Resources</h4>
            <div className="row mb-3">
              <div className="col-md-4 left-text">Reading Materials:</div>
              <div className="col-md-8 right-text">
                <a
                  className="theme-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/search?q=${exercise.name} exercise -youtube`}
                >
                  {exercise.name} - Text
                </a>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4 left-text">Video Materials:</div>
              <div className="col-md-8 right-text">
                <a
                  className="theme-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.youtube.com/results?search_query=${exercise.name} exercise`}
                >
                  {exercise.name} - Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

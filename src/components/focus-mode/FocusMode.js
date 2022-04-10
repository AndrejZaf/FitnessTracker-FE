import React, { useEffect, useState } from "react";
import "./FocusMode.css";
import { isLoading, toggleLoading } from "./../../store/StoreFacade";
import { getWorkoutByUid } from "../../services/WorkoutService";
import Timer from "../timer/Timer";
import { Link } from "react-router-dom";

export default function FocusMode(props) {
  const workoutUidFromPath = props.match.params.uid;
  const [loading, setLoading] = useState(true);
  const [workout, setWorkout] = useState({});
  const [currentExercise, setCurrentExercise] = useState({});
  const [currentSet, setCurrentSet] = useState({});
  const [initateTimer, setInitiateTimer] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [setIndex, setSetIndex] = useState(0);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [workoutFinished, setWorkoutFinished] = useState(false);
  const [leftButtonAvailability, setLeftButtonAvailability] = useState(true);

  useEffect(() => {
    toggleLoading();
    getWorkoutByUid(workoutUidFromPath)
      .then((response) => {
        const workoutResponse = response.data;
        const firstExercise = workoutResponse.exercises[exerciseIndex];
        setWorkout(workoutResponse);
        setCurrentExercise(firstExercise);
        if (firstExercise.sets.length > 0) {
          setCurrentSet(firstExercise.sets[setIndex]);
        }
      })
      .finally(() => {
        toggleLoading();
        setLoading(false);
      });
  }, [workoutUidFromPath, exerciseIndex, setIndex]);

  function handleLeftClick() {
    const newIndex = setIndex - 1;
    if (currentExercise.sets[newIndex] !== undefined) {
      setSetIndex(newIndex);
      setCurrentSet(currentExercise.sets[newIndex]);
    } else {
      const newExerciseIndex = exerciseIndex - 1;
      if (workout.exercises[newExerciseIndex] !== undefined) {
        const newExercise = workout.exercises[newExerciseIndex];
        const resetSetIndex = newExercise.sets.length - 1;
        setCurrentExercise(newExercise);
        setSetIndex(resetSetIndex);
        setCurrentSet(newExercise.sets[resetSetIndex]);
        setExerciseIndex(newExerciseIndex);
      } else {
        setLeftButtonAvailability(true);
      }
    }
  }

  function handleRightClick() {
    setInitiateTimer(true);
    const time = new Date();
    time.setSeconds(time.getSeconds() + currentSet.restPeriod);
    setTimerSeconds(time);
  }

  function goToNextSetOrExercise() {
    const newIndex = setIndex + 1;
    setLeftButtonAvailability(false);
    if (currentExercise.sets[newIndex] !== undefined) {
      setSetIndex(newIndex);
      setCurrentSet(currentExercise.sets[newIndex]);
    } else {
      const newExerciseIndex = exerciseIndex + 1;
      if (workout.exercises[newExerciseIndex] !== undefined) {
        const newExercise = workout.exercises[newExerciseIndex];
        const resetSetIndex = 0;
        setCurrentExercise(newExercise);
        setSetIndex(resetSetIndex);
        setCurrentSet(newExercise.sets[resetSetIndex]);
        setExerciseIndex(newExerciseIndex);
      } else {
        console.log("Finished workout");
        setWorkoutFinished(true);
      }
    }
  }

  if (loading) {
    return "";
  }

  return (
    <div className="h-90">
      <div className="d-flex justify-content-center pt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-x-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
        </svg>
      </div>

      {workoutFinished ? (
        <div className="h-100 d-flex justify-content-center">
          <div className="align-self-center text-center">
            <h1>Congratulations!</h1>
            <Link to="/workouts" className="btn btn-primary purple-button">
              Finish Session
            </Link>
          </div>
        </div>
      ) : (
        <div
          className={`h-100 d-flex ${
            !initateTimer ? `justify-content-between` : `justify-content-center`
          } align-items-center`}
        >
          {!initateTimer && (
            <div
              className={`left-button ${
                leftButtonAvailability ? "inactive-button" : ""
              }`}
              onClick={handleLeftClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                fill="currentColor"
                className="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </div>
          )}

          <div className="">
            <div className="exercise-content text-center align-self-center">
              {initateTimer ? (
                <Timer
                  expiryTimestamp={timerSeconds}
                  setInitiateTimer={setInitiateTimer}
                  goToNextSetOrExercise={goToNextSetOrExercise}
                />
              ) : (
                <>
                  <h3>{workout.name}</h3>
                  <img
                    src={currentExercise.image}
                    alt={currentExercise.image}
                  />
                  <h2>{currentExercise.name}</h2>
                  <h3>{currentSet.reps} Repetitions</h3>
                  <h3>{currentSet.weight} kg</h3>
                </>
              )}
            </div>
          </div>
          {!initateTimer && (
            <div className="right-button" onClick={handleRightClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
          )}
        </div>
      )}

      <div className="d-flex justify-content-center dot">
        {workout.exercises.map((exercise, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width={exercise === currentExercise ? "20" : "15"}
            height={exercise === currentExercise ? "20" : "15"}
            fill="currentColor"
            className="bi bi-circle-fill me-3 align-self-center"
            viewBox="0 0 16 16"
          >
            <circle cx="8" cy="8" r="8" />
          </svg>
        ))}
      </div>
    </div>
  );
}

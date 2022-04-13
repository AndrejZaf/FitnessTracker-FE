import React, { useState, useEffect } from "react";
import ShareButton from "../components/ShareButton/ShareButton";
import { getWorkoutByUid } from "../services/WorkoutService";
import BackButton from "./../components/back-button/BackButton";
import Model from "react-body-highlighter";
import { mapToModelTarget } from "../util/ExerciseUtil";
import { Accordion } from "react-bootstrap";
import store from "../store/Store";

export default function PreviewWorkout(props) {
  const workoutUidFromPath = props.match.params.uid;
  const [workout, setWorkout] = useState({});
  const [musclesData, setMusclesData] = useState([{ muscles: [] }]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(store.getState().isLoggedIn);
    const unsubscribe = store.subscribe(() => {
      setIsLoggedIn(store.getState().isLoggedIn);
    });

    getWorkoutByUid(workoutUidFromPath).then((response) => {
      const workoutResponse = response.data;
      let extractedExercises = [];
      workoutResponse.exercises.forEach((exercise) => {
        const mappedExercise = mapToModelTarget(exercise.target);
        if (mappedExercise instanceof Array) {
          extractedExercises = [...extractedExercises, ...mappedExercise];
        } else {
          extractedExercises = [...extractedExercises, mappedExercise];
        }
      });
      extractedExercises = [...new Set(extractedExercises)];
      setMusclesData([{ muscles: [...extractedExercises] }]);
      setWorkout(workoutResponse);
    });
    return unsubscribe;
  }, [workoutUidFromPath]);

  return (
    <>
      <div className="page-header-workouts text-white d-flex justify-content-between">
        <div className="ms-5 mt-3">
          <BackButton />
        </div>
        <div className="align-self-center">
          <h1>{workout.name}</h1>
        </div>
        <div className="me-5 mt-3 preview-share-button">
          <ShareButton workoutUid={workout.uid} />
        </div>
      </div>
      <div className="bottom-container">
        <div className="container">
          <div className="user-workouts mb-4">
            <div className="row border-bottom">
              <div className="col-md-4 col-6">
                <h2 className="pb-2">Focus Groups</h2>
              </div>
              <div className="col-md-8 col-6 text-end">
                {/* {isLoggedIn && (
                  <button
                    className="btn btn-primary purple-button"
                    onClick={() => console.log("Added")}
                  >
                    Add Workout
                  </button>
                )} */}
              </div>
            </div>
            <div className="models">
              <div className="d-flex justify-content-center models mb-2 mt-2">
                <div className="preview-model">
                  <Model data={musclesData} highlightedColors={["#8587DC"]} />
                </div>
                <br />
                <div className="preview-model">
                  <Model
                    type="posterior"
                    data={musclesData}
                    highlightedColors={["#8587DC"]}
                    className="preview-model-2"
                  />
                </div>
              </div>
            </div>
            <div className="exercises">
              <div className="border-bottom">
                <h2 className="pb-2">Exercises</h2>
              </div>
              <div className="row">
                {workout.exercises !== undefined ? (
                  workout.exercises.map((exercise, index) => (
                    <div key={index}>
                      <Accordion>
                        <Accordion.Item eventKey={index}>
                          <Accordion.Header>
                            <strong>{exercise.name}</strong>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="row">
                              <div className="col-md-6 d-flex justify-content-end">
                                <div className="accordion-image">
                                  <img
                                    src={exercise.image}
                                    className="img-fluid"
                                    alt="exercise"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 d-flex align-items-center">
                                {exercise.sets.length === 0 ? (
                                  <p>
                                    There are no sets for the current exercise!
                                  </p>
                                ) : (
                                  <ul className="list-unstyled">
                                    {exercise.sets.map((set, index) => (
                                      <li key={index}>
                                        <strong>Set {index + 1}</strong> -{" "}
                                        {set.reps !== undefined &&
                                        set.reps !== 0
                                          ? `Reps:
                                      ${set.reps}`
                                          : ""}{" "}
                                        {set.weight !== undefined &&
                                        set.weight !== 0
                                          ? ` - Weight:
                                      ${set.weight}`
                                          : ""}{" "}
                                        {set.restPeriod !== undefined &&
                                        set.restPeriod !== 0
                                          ? ` - Rest Period:
                                      ${set.restPeriod}`
                                          : ""}{" "}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  ))
                ) : (
                  <p>No exercises</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

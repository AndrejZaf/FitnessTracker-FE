import React, { useEffect, useState } from "react";
import AddWorkout from "../components/add-workout/AddWorkout";
import EmptyButton from "../components/empty-button/EmptyButton";
import FocusMode from "../components/focus-mode/FocusMode";
import SynchronizeButton from "../components/synchronize-button/SynchronizeButton";
import WorkoutsTable from "../components/workouts-table/WorkoutsTable";
import store from "../store/Store";
import { getUserWorkouts } from "../store/StoreFacade";
import "./Workouts.css";

export default function Workouts() {
  const [workouts, setWorkouts] = useState(getUserWorkouts());
  const [showModal, setShowModal] = useState(false);
  const [editWorkout, setEditWorkout] = useState({});

  useEffect(() => {
    const unsubscribe = store.subscribe(() =>
      setWorkouts(store.getState().currentUser.workouts)
    );
    return () => {
      unsubscribe();
    };
  }, []);

  function handleAddWorkoutButton() {
    setShowModal(true);
  }

  function hideAddWorkout() {
    setShowModal(false);
  }

  return (
    <>
      {showModal ? (
        <AddWorkout
          showModal={showModal}
          hideModal={hideAddWorkout}
          workout={editWorkout}
          setEditWorkout={setEditWorkout}
        />
      ) : (
        ""
      )}
      <div className="page-header-workouts text-white d-flex justify-content-between">
        <div className="ms-5 mt-3">
          <EmptyButton />
        </div>
        <div className="align-self-center">
          <h1>Workouts</h1>
        </div>

        <div className="me-5 mt-3">
          <SynchronizeButton />
        </div>
      </div>

      <div className="bottom-container">
        <div className="container">
          <div className="user-workouts mb-4">
            <div className="row border-bottom">
              <div className="col-md-4 col-6">
                <h2 className="pb-2">Your Workouts</h2>
              </div>
              <div className="col-md-8 col-6 text-end">
                <button
                  className="btn btn-primary purple-button"
                  onClick={() => handleAddWorkoutButton()}
                >
                  Add Workout
                </button>
              </div>
            </div>
            {workouts.length === 0 ? (
              <p>
                Currently you don't have any workouts, feel free to create a new
                one by clicking on the "Add Workout" button
              </p>
            ) : (
              <WorkoutsTable
                setEditWorkout={setEditWorkout}
                handleAddWorkoutButton={handleAddWorkoutButton}
                workouts={workouts}
              />
            )}
          </div>

          {/* <div className="admin-workouts mb-4">
            <h2 className="pb-2 border-bottom">Trending Workouts</h2>
          </div> */}
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/9g08kucPQtE?controls=0"
                  title="YouTube video"
                  allowFullScreen={true}
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Create Your Own Personalized Workout
              </h1>
              <p className="lead">
                With our creation wizard you can quickly create your own
                workout, where you can target the desired muscles. Additionally
                for each exercise in the workout you can determine how many sets
                you want to do, and for each set you can specify additional
                details such as weight, repetitions and rest period after each
                exercise set. On top of that don't forget to use our specialized
                focus mode, which will serve you as a great reminder during your
                workout!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

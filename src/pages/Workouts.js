import React, { useEffect, useState } from "react";
import AddWorkout from "../components/add-workout/AddWorkout";
import EmptyButton from "../components/empty-button/EmptyButton";
import SynchronizeButton from "../components/synchronize-button/SynchronizeButton";
import WorkoutsTable from "../components/workouts-table/WorkoutsTable";
import store from "../store/Store";
import { getUserWorkouts } from "../store/StoreFacade";
import "./Workouts.css";

export default function Workouts() {
  const [workouts, setWorkouts] = useState(getUserWorkouts());
  const [showModal, setShowModal] = useState(false);

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
        <AddWorkout showModal={showModal} hideModal={hideAddWorkout} />
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
              <WorkoutsTable workouts={workouts} />
            )}
          </div>

          {/* <div className="admin-workouts mb-4">
            <h2 className="pb-2 border-bottom">Trending Workouts</h2>
          </div> */}
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img
                src="bootstrap-themes.png"
                class="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">
                Responsive left-aligned hero with image
              </h1>
              <p class="lead">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  class="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Primary
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-lg px-4"
                >
                  Default
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

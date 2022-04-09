import React, { useEffect, useState } from "react";
import AddWorkout from "../components/add-workout/AddWorkout";
import EmptyButton from "../components/empty-button/EmptyButton";
import SynchronizeButton from "../components/synchronize-button/SynchronizeButton";
import { getUserWorkouts } from "../store/StoreFacade";
import "./Workouts.css";

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setWorkouts(getUserWorkouts());
  });

  function handleAddWorkoutButton() {
    setShowModal(true);
  }

  function hideAddWorkout() {
    setShowModal(false);
  }

  return (
    <>
      {showModal ? (
        <AddWorkout showModal={showModal} test={hideAddWorkout} />
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

            {/* Content goes here */}
          </div>

          <div className="admin-workouts mb-4">
            <h2 className="pb-2 border-bottom">Trending Workouts</h2>
          </div>
        </div>
      </div>
    </>
  );
}

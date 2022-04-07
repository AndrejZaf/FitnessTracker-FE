import React, { useEffect } from "react";
import { getWorkoutsForUser } from "../services/WorkoutService";
import { getCurrentUser } from "../store/StoreFacade";
import "./Workouts.css";

export default function Workouts() {
  useEffect(() => {});

  return (
    <>
      <div className="page-header-workouts text-white d-flex justify-content-center">
        <div className="align-self-center ">
          <h1>Workouts</h1>
        </div>
      </div>
    </>
  );
}

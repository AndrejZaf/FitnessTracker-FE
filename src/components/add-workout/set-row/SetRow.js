import React, { useState } from "react";
import DeleteSetButton from "../delete-set-button/DeleteSetButton";
import VerticalGripButton from "./../vertical-grip-button/VerticalGripButton";

export default function SetRow({ provided, snapshot, set, deleteRow }) {
  const [reps, setReps] = useState(set.reps);
  const [weight, setWeight] = useState(set.weight);
  const [restPeriod, setRestPeriod] = useState(set.restPeriod);

  return (
    <div
      className="d-flex align-items-center mt-2"
      ref={provided.innerRef}
      snapshot={snapshot}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div>
        <VerticalGripButton />
      </div>
      <div>
        <form>
          <div className="row g-3">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Repetitions"
                aria-label="reps"
                onChange={(e) => (set.reps = e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Weight"
                aria-label="weight"
                onChange={(e) => (set.weight = e.target.value)}
              />
            </div>

            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Rest Period (In seconds)"
                aria-label="rest-period"
                onChange={(e) => (set.restPeriod = e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="align-items-end">
        <DeleteSetButton deleteRow={deleteRow} />
      </div>
    </div>
  );
}

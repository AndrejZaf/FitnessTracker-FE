import React, { useState } from "react";
import DeleteSetButton from "../delete-set-button/DeleteSetButton";
import VerticalGripButton from "./../vertical-grip-button/VerticalGripButton";

export default function SetRow({ provided, snapshot, set, deleteRow }) {
  const [reps, setReps] = useState(set.reps);
  const [weight, setWeight] = useState(set.weight);
  const [restPeriod, setRestPeriod] = useState(set.restPeriod);

  function handleFieldUpdate(newValue, field) {
    switch (field) {
      case "Reps":
        set.reps = newValue;
        setReps(newValue);
        break;
      case "Weight":
        set.weight = newValue;
        setWeight(newValue);
        break;
      case "Rest Period":
        set.restPeriod = newValue;
        setRestPeriod(newValue);
        break;
      default:
        return;
    }
  }

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
                value={reps}
                onChange={(e) => handleFieldUpdate(e.target.value, "Reps")}
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Weight"
                aria-label="weight"
                value={weight}
                onChange={(e) => handleFieldUpdate(e.target.value, "Weight")}
              />
            </div>

            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Rest Period (In seconds)"
                aria-label="rest-period"
                value={restPeriod}
                onChange={(e) =>
                  handleFieldUpdate(e.target.value, "Rest Period")
                }
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

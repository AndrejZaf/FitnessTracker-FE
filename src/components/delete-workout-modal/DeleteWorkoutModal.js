import React from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { deleteWorkoutByUid } from "../../services/WorkoutService";
import { deleteWorkoutByUid as storeDeleteWorkoutByUid } from "./../../store/StoreFacade";
import { toggleLoading } from "../../store/StoreFacade";

export default function DeleteWorkoutModal({
  showModal,
  setShowModal,
  workout,
}) {
  const handleClose = () => setShowModal(false);

  function deleteWorkout(uid) {
    toggleLoading();
    deleteWorkoutByUid(uid)
      .then(() => {
        storeDeleteWorkoutByUid(uid);
      })
      .finally(() => {
        toggleLoading();
        handleClose();
      });
  }

  return (
    <>
      <Modal show={showModal} onHide={handleClose} size="md" centered>
        <Modal.Body className="p-4 text-center">
          <h5 className="mb-0">
            Are you sure you want to delete <br />
            <strong>{workout.name}</strong>?
          </h5>
          <p className="mb-0">
            By doing this you are going to permanently delete
            <br /> <strong>{workout.name}</strong> from your list of workouts!
            <br />
          </p>
        </Modal.Body>
        <Modal.Footer className="flex-nowrap p-0 custom-footer-border">
          <Button
            className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 btn-border text-danger"
            variant="link"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            className="btn btn-lg btn-danger fs-6 text-decoration-none col-6 m-0 rounded-0 btn-border text-white btn-danger-border"
            variant="danger"
            onClick={() => deleteWorkout(workout.uid)}
          >
            <strong>Delete</strong>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

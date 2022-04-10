import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import "./ConfirmationModal.css";
import { Link } from "react-router-dom";

export default function FocusModeConfirmationModal({
  startFocusMode,
  setStartFocusMode,
  workoutUid,
}) {
  const handleClose = () => setStartFocusMode(false);

  return (
    <>
      <Modal show={startFocusMode} onHide={handleClose} size="md" centered>
        <Modal.Body className="p-4 text-center">
          <h5 className="mb-0">Proceed with focus mode?</h5>
          <p className="mb-0">
            You can always change your mind, and leave the focus mode.
            <br />
          </p>
        </Modal.Body>
        <Modal.Footer className="flex-nowrap p-0">
          <Link
            to={`/workouts/${workoutUid}/focus`}
            className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-right theme-link"
          >
            <strong>Yes, proceed</strong>
          </Link>
          <Button
            className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 btn-border text-danger"
            variant="link"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

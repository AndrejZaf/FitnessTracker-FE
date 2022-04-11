import React from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FocusModeCancelationModal({
  showCancelModal,
  setShowCancelModal,
}) {
  const handleClose = () => setShowCancelModal(false);
  return (
    <>
      <Modal show={showCancelModal} onHide={handleClose} size="md" centered>
        <Modal.Body className="p-4 text-center">
          <h5 className="mb-0">Are you sure you want to leave focus mode?</h5>
          <p className="mb-0">
            By doing this you are going to lose the current progress, and{" "}
            <strong>restart</strong> with the workout session.
            <br />
          </p>
        </Modal.Body>
        <Modal.Footer className="flex-nowrap p-0">
          <Button
            className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 btn-border text-danger"
            variant="link"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Link
            to={`/workouts`}
            className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-right theme-link"
          >
            <strong>Yes, I'm sure</strong>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

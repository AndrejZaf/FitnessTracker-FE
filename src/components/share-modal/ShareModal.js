import React from "react";
import { Modal, Button } from "react-bootstrap";
import { copyToClipboardToast } from "../../services/ToastService";

export default function ShareModal({ showModal, setShowModal, workoutUid }) {
  const url = window.location.href.split("/");
  const onHide = () => setShowModal(false);

  function constructUrl() {
    return `${url[0]}/${url[1]}/${url[2]}/${url[3]}/${workoutUid}/preview`;
  }

  function copyToClipboard() {
    const promise = navigator.clipboard.writeText(
      `${url[0]}/${url[1]}/${url[2]}/${url[3]}/${workoutUid}/preview`
    );
    copyToClipboardToast(promise);
  }

  const handleFocus = (event) => event.target.select();

  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      size="lg"
      backdrop="true"
      keyboard={true}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Share your workout with anyone!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Share it with anyone, anywhere and anytime! Enjoy the workouts
          individually or in a group environment! Also don't forget to spread
          positivity and enjoy yourself while also working on your health!
        </p>
        <div className="input-group mb-3">
          <button
            className="btn btn-primary purple-button"
            type="button"
            id="button-addon1"
            onClick={copyToClipboard}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-link"
              viewBox="0 0 16 16"
            >
              <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
              <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
            </svg>{" "}
            Copy
          </button>
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            value={constructUrl()}
            onFocus={handleFocus}
            readOnly
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="purple-button" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

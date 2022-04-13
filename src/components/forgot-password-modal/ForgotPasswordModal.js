import React from "react";
import { Modal } from "react-bootstrap";
export default function ForgotPasswordModal({
  showModal,
  setShowModal,
  handleClosedModal,
}) {
  const onHide = () => {
    handleClosedModal();
    setShowModal(false);
  };
  return (
    <>
      <Modal
        show={showModal}
        onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Password Reset
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {/* <h4>Centered Modal</h4> */}
          <p>
            Please check your inbox, a link has been sent in order to reset your
            password. You will be redirected to the login page.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

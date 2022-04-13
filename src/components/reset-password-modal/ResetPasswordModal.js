import React from "react";
import { Modal } from "react-bootstrap";
export default function ResetPasswordModal({
  showModal,
  setShowModal,
  handleSuccessfulPasswordReset,
}) {
  const onHide = () => {
    handleSuccessfulPasswordReset();
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
            Password Changed Successfully
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {/* <h4>Centered Modal</h4> */}
          <p>
            Your password has been changed successfully, you can proceed with
            the login. You will be redirected there.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

import React from "react";
import { Modal } from "react-bootstrap";

export default function SignUpModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Thank you for joining!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <p>
          Please check your inbox, a verification link has been sent in order to
          complete the registration process.
        </p>
      </Modal.Body>
    </Modal>
  );
}

import React from "react";
import { Modal } from "react-bootstrap";
import AddWorkoutBackButton from "../back-button/AddWorkoutBackButton";

export default function ModalHeader({
  text,
  backButton,
  changeSection,
  section,
}) {
  return (
    <>
      {backButton ? (
        <AddWorkoutBackButton changeSection={changeSection} section={section} />
      ) : (
        ""
      )}
      <Modal.Title>{text}</Modal.Title>
    </>
  );
}

import React from "react";
import { Modal } from "react-bootstrap";
import Button from "@mui/material/Button";

const AlertModal = ({ AlertOpen, handleAlertModalClose, alertText }) => {
  return (
    <Modal
      variant="dark"
      show={AlertOpen}
      onHide={handleAlertModalClose}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-success">
          {alertText} Successfully
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{alertText}</Modal.Body>
      <Modal.Footer>
        <Button
          className="customBtn"
          variant="contained"
          onClick={handleAlertModalClose}
        >
          Okay!
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;

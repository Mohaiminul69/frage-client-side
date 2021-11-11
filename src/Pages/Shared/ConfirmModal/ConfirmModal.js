import React from "react";
import { Modal } from "react-bootstrap";
import Button from "@mui/material/Button";

const ConfirmModal = ({
  handleOrderDelete,
  confirmModalOpen,
  handleConfirmModalClose,
  orderId,
}) => {
  /*
<---------------------------- Confirm Modal Sending Id to Delete From Database ---------------------------->
*/
  return (
    <Modal show={confirmModalOpen} onHide={handleConfirmModalClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-danger">Cancel Order!!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to proceed?</Modal.Body>
      <Modal.Footer>
        <Button
          variant="contained"
          className="bg-danger me-3"
          onClick={() => handleOrderDelete(orderId)}
        >
          Confirm
        </Button>
        <Button
          variant="contained"
          className="bg-dark"
          onClick={handleConfirmModalClose}
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;

import React from "react";
import { Modal, Backdrop, Fade, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ConfirmationModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 600,
      }}
      className="backdrop-blur-sm"
    >
      <Fade in={open}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            width: "20%",
            height: "20%",
          }}
          className="flex flex-col justify-center items-center"
        >
          <CheckCircleIcon className="text-blue-400" />
          <p className="text-xl">Submitted</p>
        </div>
      </Fade>
    </Modal>
  );
};

export default ConfirmationModal;

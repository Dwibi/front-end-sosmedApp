import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  paddingTop: 4,
  paddingBottom: 4,
  borderRadius: 5,
};

export default function ModalPopUp(props) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col items-center">
            <h2 className="text-[24px]">Discard Post?</h2>
            <p className="text-[14px] text-[#737373]">
              if You leave, your edits won't be saved.
            </p>
            <div className="mt-5 flex flex-col w-full border-t border-[#737373]">
              <button
                onClick={props.handleCloseAll}
                className="text-red-500 font-bold py-2 w-full"
              >
                Discard
              </button>
              <button
                onClick={props.handleClose}
                className="py-2 w-full border-y border-[#737373]"
              >
                Cancel
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

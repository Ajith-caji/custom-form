import React, { useState } from "react";
import plus from "../../assets/plus-button.png";
import Existingcard from "./Existingcard";
import AlertDialog from "../Modal/Modal";

function Newform() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="container mt-1 flex flex-wrap gap-4">
        <div className="bg-white w-64 h-76 border-2 shadow-lg flex justify-center items-center rounded-md">
          <button
            className="flex items-center font-bold text-black"
            type="submit"
            onClick={handleClickOpen}
           
          >
            <img src={plus} width="50px" alt="Logo" />
            New Form
          </button>
        </div>
        <Existingcard />
      </div>
      <AlertDialog  open={open}handleClose={handleClose} />
    </>
  );
}

export default Newform;

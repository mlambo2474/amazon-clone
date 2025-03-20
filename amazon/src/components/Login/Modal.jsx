import React from "react";

const Modal = ({ setIsOpen }) => {

const HandleCloseButton = () =>{
  setIsOpen(false);
}

  return (
    <>
      <div className="modal-div">
        <div style={modalStyle}>
          <h3>test Modal</h3>
          <button onClick={ HandleCloseButton }>Close</button>
          <p>This is a simple Modal</p>
        </div>
      </div>
    </>
  );
};
const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%",
    width: 400,
    background: "grey",
    borderRadius: "24px",
    boxShadow:24,
    padding: "20px", 
    textAlign: "center",

}
export default Modal;

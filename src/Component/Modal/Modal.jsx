import React from "react";

const Modal = ({activeModal, setActiveModal}) => {
    const styleModal = {
        display: activeModal ?  "block" : "none",
        background: "black",
        color:"white",
        textAlign: "center",
        padding: "20px",
        border: "1px solid black",
        width: "50%",
        margin: "auto",
        marginTop: "50%",
        position: "relative",
        zIndex: 1000,
    }

  return (
      <div style={{...styleModal}}>
          <button style={{position: "absolute", right: "0", top: "0", padding:"3px 10px"}} onClick={() => setActiveModal(false)}>x</button>
        <p>Employee Created!</p>
      </div>
  );
};

export default Modal;

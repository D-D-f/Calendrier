import React from "react";

const Modal = ({active, changeModal}) => {
    const styleModal = {
        display: active ? "block" : "none",
    }

  return (
      <div style={{...styleModal}}>
          <button onClick={() => changeModal(false)}>x</button>
        <p>Employee Created!</p>
      </div>
  );
};

export default Modal;

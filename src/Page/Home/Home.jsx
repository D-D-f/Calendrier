import React from "react";
import "./Home.css";
import Header from "../../Component/Header/Header";
import Form from "../../Component/Form/Form";
import Modal from "../../Component/Modal/Modal";

const Home = () => {
    const [activeModal, setActiveModal] = React.useState(false);

    const styleOverlay = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        pointerEvents: "none",
    }

  return (
      <>
          <div style={activeModal ? {...styleOverlay} : {}} className="container">
              <div>
                  <Header/>
                  <main>
                      <Form setActiveModal={setActiveModal}/>
                  </main>
              </div>
          </div>
          <Modal activeModal={activeModal} setActiveModal={setActiveModal} style={{ zIndex: 1000 }} />
      </>
  );
};

export default Home;

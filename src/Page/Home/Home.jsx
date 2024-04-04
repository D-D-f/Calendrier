import React from "react";
import "./Home.css";
import Header from "../../Component/Header/Header";
import Form from "../../Component/Form/Form";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Form />
      </main>
    </div>
  );
};

export default Home;

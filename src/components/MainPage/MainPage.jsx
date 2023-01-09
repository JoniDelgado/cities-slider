import React from "react";
import Nav from "../Nav/Nav";
import "./mainPage.scss";

const MainPage = () => {
  return (
    <main className="main">
      <section className="main__left-section">
        <Nav />
      </section>
      <section className="main__right-section"></section>
    </main>
  );
};

export default MainPage;

import React, { useContext } from "react";
import dataContext from "../../context/DataProvider";
import FadeComponent from "../FadeComponent/FadeComponent";
import Nav from "../Nav/Nav";
import PostInfo from "../PostInfo.jsx/PostInfo";
import "./mainPage.scss";

const MainPage = () => {
  const data = useContext(dataContext);

  return (
    <main className="main">
      <Nav />
      {data.map((el, ind, array) => {
        return (
          <div className="post-container" key={el.id}>
            <div className="post-text">
              <FadeComponent
                cssClass="post-text__text"
                children={<p>{el.text}</p>}
              />
              <FadeComponent
                cssClass="post-text__country"
                children={<p>{el.country}</p>}
              />
              <FadeComponent
                cssClass="post-text__state"
                children={<p>{el.state}</p>}
              />
              <FadeComponent
                cssClass="post-text__flag"
                children={<img src={el.flag} />}
              />
              <FadeComponent
                cssClass="post-text__post-number"
                children={
                  <p>
                    Post {ind + 1} de {array.length}
                  </p>
                }
              />
              <FadeComponent
                cssClass="post-text__post-info"
                children={<PostInfo />}
              />
            </div>
            <img className="post-container__image" src={el.img} alt="" />
          </div>
        );
      })}
    </main>
  );
};

export default MainPage;

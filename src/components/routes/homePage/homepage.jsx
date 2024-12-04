import React from "react";
import "./homepage.scss";
import { SearchBar } from "./../../searchBar/searchBar";

export const Homepage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Billboard for your use, for rent mothly </h1>
          <p>lorem ipsum</p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>10+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Billboards</h2>
            </div>
            <div className="box">
              <h1>1000+</h1>
              <h2>Clients</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./bg.png" alt=""></img>
      </div>
    </div>
  );
};

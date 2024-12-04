import React from "react";
import "./SinglePage.scss";
import { Slider } from "../../slider/Slider";
import { singlePost } from "../../../lib/data";
import Map from "../../../components/map/Map";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePost.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePost.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePost.address}</span>
                </div>
                <div className="price">${singlePost.price}</div>
              </div>
            </div>
            <div className="bottom">{singlePost.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Client is responsible</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes"></div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal"></div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePost]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;

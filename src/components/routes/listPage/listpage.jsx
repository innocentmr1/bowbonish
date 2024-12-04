import React from "react";
import "./listpage.scss";
import { Data } from "../../../lib/data";
import { Card } from "../../card/Card";
import { Filter } from "./../../filter/Filter";
import Map from "../../map/Map";

function ListPage() {
  // console.log(3);

  const data = Data;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
}
export default ListPage;

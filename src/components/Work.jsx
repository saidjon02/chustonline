import React from "react";
import Fetch from "./Fetch";
import Card from "./Card";
import { Link } from "react-router-dom";
import man from "../../imgs/man.png";
import map from "../../imgs/map.png";
import izo from "../../imgs/izo.png";
function Work() {
  const { ish } = Fetch("https://5b4fe1198f106fc2.mokky.dev/ish");
  return (
    <div className="ish-row2 container">
      {ish &&
        ish.map((a) => {
          return (
            <Link to={`/list/${a.id}`}>
              <div className="ish-card">
                <h2 className="ish-card-title">{a.title}</h2>
                <div className="ish-card-row">
                  <p className="ish-card-text3">TO'LIQ</p>
                  <p className="ish-card-text4">oylik: {a.price}</p>
                </div>
                <div className="ish-card-row2">
                  <div className="ish-card-roww">
                    <img src={man} alt="" />
                    <div className="ish-card-row-text-box">
                      <h2 className="ish-card-title2">{a.about}</h2>
                      <p className="ish-card-text2">
                        <img src={map} className="map-img" alt="" />
                        {a.place}
                      </p>
                    </div>
                  </div>
                  <img src={izo} alt="" />
                </div>
              </div>
            </Link>
          );
        })}
        <Card />
    </div>
  );
}

export default Work;

import React from "react";
import Fetch from "./Fetch";
import { Link } from "react-router-dom";
import man from "../../imgs/man.png";
import map from "../../imgs/map.png";
import izo from "../../imgs/izo.png";
function Work() {
  const { add } = Fetch("https://5b4fe1198f106fc2.mokky.dev/newmovies");
  return (
    <div className="ish-row2 container">
      {add &&
        add.map((a) => {
          return (
            <Link to={`/liist/${a.id}`} className="add-ls">
              <div className="ish-card">
                <h2 className="ish-card-title">{a.nomi}</h2>
                <div className="ish-card-row">
                  <p className="ish-card-text3">TO'LIQ</p>
                  <p className="ish-card-text4">oylik: {a.oylik}</p>
                </div>
                <div className="ish-card-row2">
                  <div className="ish-card-roww">
                    <img src={man} alt="" />
                    <div className="ish-card-row-text-box">
                      <h2 className="ish-card-title2">{a.ishlaysiz}</h2>
                      <p className="ish-card-text2">
                        <img src={map} className="map-img" alt="" />
                        {a.manzil}
                      </p>
                    </div>
                  </div>
                  <img src={izo} alt="" />
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default Work;

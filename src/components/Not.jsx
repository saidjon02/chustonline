import React from "react";
import errorr from "../../imgs/error.png";
import { Link } from "react-router-dom";
function Not() {
  return (
    <div className="not container">
      <div className="not-row">
        <div className="not-right">
          <img src={errorr} alt="" />
        </div>
        <div className="not-left">
          <h2 className="not-title">Error 404</h2>
          <p className="not-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
            maxime asperiores! Consequuntur impedit molestiae, aperiam
            architecto accusantium numquam vero voluptate, in enim, hic quidem
            libero optio dolor illo nobis quos.
          </p>
          <Link to={"/"}>
            <button className="not-btn">Back to Home page</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Not;

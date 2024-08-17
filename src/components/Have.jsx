import React from 'react'
import { Link } from 'react-router-dom'
import Work from './Work'
import right from "../../imgs/right.png";
function Have() {
  return (
    <div>
      <div className="ish container">
        <div className="ish-row">
          <h2 className="ish-title">Ish o’rinlari</h2>
          <Link to={"/"}>
            <button className="ish-btn">
              Hammasini ko’rish <img src={right} alt="" />
            </button>
          </Link>
        </div>
        <div>
          <Work />
        </div>
      </div>
    </div>
  )
}

export default Have
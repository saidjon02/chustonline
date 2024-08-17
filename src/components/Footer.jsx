import React from 'react'
import foot from "../../imgs/foot-logo.png"
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <img src={foot} alt="" className="foot-img" />
        <h2 className="tel-num">
          Telefon raqamimiz: <span className="foot-span">+998883715271</span>
        </h2>
        <p className="about-site">
          Manzil: Namangan viloyati, Chust shaxri 35 uy
        </p>
      </div>
    </div>
  );
}

export default Footer
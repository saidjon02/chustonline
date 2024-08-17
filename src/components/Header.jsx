import React from "react";
import { Link, NavLink } from "react-router-dom";
import phone from "../../imgs/phone.png";
import uzb from "../../imgs/uzb.png";
import logo from "../../imgs/logo.png";
function Header() {
  return (
    <div className="header">
      <div className="Nav ">
        <nav className="container row-df">
          <div className="nav-left">
            <ul className="row-df">
              <li>
                <NavLink to={"/"}>Asosiy</NavLink>
              </li>
              <li>
                <NavLink to={"work"}>Vakansiyalar</NavLink>
              </li>
              <li>
                <NavLink to={"not"}>Savol Javoblar</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-right row-df">
            <h2 className="phone row-df">
              <img src={phone} alt="" />
              +998883715271
              <img src={uzb} alt="" />
            </h2>

            <select className="countries">
              <option value="">Uzbek</option>
              <option value="dog">Rus</option>
              <option value="cat">AQSH</option>
            </select>
          </div>
        </nav>
      </div>
      <header className="container row-df">
        <div className="header-left">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header-center">
          <div className="input-divs">
            <div className="inp-box row-df">
              <div className="select">
                <img src={uzb} alt="" />
                <select className="countries color">
                  <option value="">Chust</option>
                  <option value="dog">Pop</option>
                  <option value="cat">Olmos</option>
                  <option value="cat">Axcha</option>
                </select>
              </div>
              <input type="text" placeholder="Ish izlash" className="search" />
            </div>
          </div>{" "}
        </div>
        <div className="header-right">
          <button className="header-btn">Kirish</button>
          <Link to={"add"}><button className="header-btn2">Vakansiya qo’shish</button></Link>
          
        </div>
      </header>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import img from "../../imgs/Ellipse 18.png";
function Ishonch() {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <div className="ishonch container">
      <h2 className="i-title">Chust online e'lonlar taxtasidagi ruknlar</h2>
      <div className="i-row">
        <div
          className={toggle === 1 ? "i-works" : "i-works"}
          onClick={() => toggleTab(1)}
        >
          <img src={img} alt="" className="i-img" />
          <p className="i-img-text">Bolalar dunyosi</p>
        </div>
        <div
          className={toggle === 2 ? "i-works" : "i-works"}
          onClick={() => toggleTab(2)}
        >
          <img src={img} alt="" className="i-img" />
          <p className="i-img-text">Ko’chmas mulk</p>
        </div>
        <div
          className={toggle === 3 ? "i-works" : "i-works"}
          onClick={() => toggleTab(3)}
        >
          <img src={img} alt="" className="i-img" />
          <p className="i-img-text">Transport</p>
        </div>
        <div
          className={toggle === 4 ? "i-works" : "i-works"}
          onClick={() => toggleTab(4)}
        >
          <img src={img} alt="" className="i-img" />
          <p className="i-img-text">Ish</p>
        </div>
        <div
          className={toggle === 5 ? "i-works" : "i-works"}
          onClick={() => toggleTab(5)}
        >
          <img src={img} alt="" className="i-img" />
          <p className="i-img-text">Hayvonlar</p>
        </div>
        <div
          className={toggle === 6 ? "i-works" : "i-works"}
          onClick={() => toggleTab(6)}
        >
          <img src={img} alt="" className="i-img" />
          <p className="i-img-text">Uy va bog’</p>
        </div>
        <div
          className={toggle === 7 ? "i-works" : "i-works"}
          onClick={() => toggleTab(7)}
        >
          <img src={img} alt="" className="i-img" />
          <p className="i-img-text">Elektr jihozlari</p>
        </div>
        <div
          className={toggle === 8 ? "i-works" : "i-works"}
          onClick={() => toggleTab(8)}
        >
          <img src={img} alt="" className="i-img" />
          <p className="i-img-text">Xizmatlar</p>
        </div>
        <div
          className={toggle === 9 ? "i-works" : "i-works"}
          onClick={() => toggleTab(9)}
        >
          <img src={img} alt="" className="i-img" />
          <p className="i-img-text">Moda va stil</p>
        </div>
      </div>
      <div className={toggle === 1 ? "active-contant" : "all-news"}>
        <h2 className="all-title">
          <i className="bx bx-chevron-right"></i>
          Barcha e'lonlarni ko'rib chiqish
          <span className="h2-span"> bo'lim: Bolalar dunyosi</span>
        </h2>
        <div className="all-box">
          <h2 className="all-text">
            <i className="bx bx-chevron-right"></i>
            Yengil avtomashinalar
          </h2>
        </div>
      </div>
      <div className={toggle === 2 ? "active-contant" : "all-news"}>
        <h2 className="all-title">
          <i className="bx bx-chevron-right"></i>
          Barcha e'lonlarni ko'rib chiqish
          <span className="h2-span"> bo'lim: Ko’chmas mulk</span>
        </h2>
        <div className="all-box">
          <h2 className="all-text">
            <i className="bx bx-chevron-right"></i>
            Yengil avtomashinalar
          </h2>
        </div>
      </div>
      <div className={toggle === 3 ? "active-contant" : "all-news"}>
        <h2 className="all-title">
          <i className="bx bx-chevron-right"></i>
          Barcha e'lonlarni ko'rib chiqish
          <span className="h2-span"> bo'lim: Transport</span>
        </h2>
        <div className="all-box">
          <h2 className="all-text">
            <i className="bx bx-chevron-right"></i>
            Yengil avtomashinalar
          </h2>
        </div>
      </div>
      <div className={toggle === 4 ? "active-contant" : "all-news"}>
        <h2 className="all-title">
          <i className="bx bx-chevron-right"></i>
          Barcha e'lonlarni ko'rib chiqish
          <span className="h2-span"> bo'lim: Ish</span>
        </h2>
        <div className="all-box">
          <h2 className="all-text">
            <i className="bx bx-chevron-right"></i>
            Yengil avtomashinalar
          </h2>
        </div>
      </div>
      <div className={toggle === 5 ? "active-contant" : "all-news"}>
        <h2 className="all-title">
          <i className="bx bx-chevron-right"></i>
          Barcha e'lonlarni ko'rib chiqish
          <span className="h2-span"> bo'lim: Hayvonlar</span>
        </h2>
        <div className="all-box">
          <h2 className="all-text">
            <i className="bx bx-chevron-right"></i>
            Yengil avtomashinalar
          </h2>
        </div>
      </div>
      <div className={toggle === 6 ? "active-contant" : "all-news"}>
        <h2 className="all-title">
          <i className="bx bx-chevron-right"></i>
          Barcha e'lonlarni ko'rib chiqish
          <span className="h2-span"> bo'lim: Uy va bog’</span>
        </h2>
        <div className="all-box">
          <h2 className="all-text">
            <i className="bx bx-chevron-right"></i>
            Yengil avtomashinalar
          </h2>
        </div>
      </div>
      <div className={toggle === 7 ? "active-contant" : "all-news"}>
        <h2 className="all-title">
          <i className="bx bx-chevron-right"></i>
          Barcha e'lonlarni ko'rib chiqish
          <span className="h2-span"> bo'lim: Elektr jihozlari</span>
        </h2>
        <div className="all-box">
          <h2 className="all-text">
            <i className="bx bx-chevron-right"></i>
            Yengil avtomashinalar
          </h2>
        </div>
      </div>
      <div className={toggle === 8 ? "active-contant" : "all-news"}>
        <h2 className="all-title">
          <i className="bx bx-chevron-right"></i>
          Barcha e'lonlarni ko'rib chiqish
          <span className="h2-span"> bo'lim: Xizmatlar</span>
        </h2>
        <div className="all-box">
          <h2 className="all-text">
            <i className="bx bx-chevron-right"></i>
            Yengil avtomashinalar
          </h2>
        </div>
      </div>
      <div className={toggle === 9 ? "active-contant" : "all-news"}>
        <h2 className="all-title">
          <i className="bx bx-chevron-right"></i>
          Barcha e'lonlarni ko'rib chiqish
          <span className="h2-span"> bo'lim: Moda va stil</span>
        </h2>
        <div className="all-box">
          <h2 className="all-text">
            <i className="bx bx-chevron-right"></i>
            Yengil avtomashinalar
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Ishonch;

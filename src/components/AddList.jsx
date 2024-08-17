import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Fetch from "./Fetch";
import radius from "../../imgs/radius.png";
import izob from "../../imgs/izob.png";
import mapp from "../../imgs/mapp.png";
import iconImg1 from "../../imgs/cardl (1).png";
import iconImg2 from "../../imgs/cardl (2).png";
import iconImg3 from "../../imgs/cardl (3).png";
import iconImg4 from "../../imgs/cardl (4).png";
import btns1 from "../../imgs/btns (4).png";
import btns2 from "../../imgs/btns (3).png";
import btns3 from "../../imgs/btns (2).png";
import btns4 from "../../imgs/btns (1).png";
import linkk from "../../imgs/link.png";
import Work from "./Work";
function AddList() {
  const { id } = useParams();
  const history = useNavigate();
  const { add } = Fetch(`https://5b4fe1198f106fc2.mokky.dev/newmovies/` + id);
  const DeleteItem = () => {
    fetch(`https://5b4fe1198f106fc2.mokky.dev/newmovies/${id}`, {
      method: "DELETE",
    }).then(() => {
      history("/");
    });
  };
  return (
    <div>
      {add && (
        <div className="cardlist-wrap">
          <div className="Cardlist container">
            <div className="cardl-row1">
              <div className="cardl-row1-left">
                <img src={radius} alt="" className="cardl-row1-img" />
                <div className="cardl-all-text">
                  <h2 className="title">{add.nomi}</h2>
                  <p className="about-title">{add.ishlaysiz}</p>
                </div>
              </div>
              <div className="cardl-row1-right">
                <img src={izob} alt="" className="izob" />
                <button className="cardl-row1-btn">Ariza yuborish</button>
              </div>
            </div>
            <div className="cardl-row2">
              <div className="cardl-row2-left">
                <h2 className="cardl-titlee">MALAKAVIY TALABLAR</h2>
                <p className="cardl-textt">1) {add.malakaliy1}</p>
                <p className="cardl-textt">
                  2) {add.malakaliy2}
                </p>
                <p className="cardl-textt">
                  3) {add.malakaliy3}
                </p>
                <p className="cardl-textt">
                  4) {add.malakaliy4}
                </p>
                <p className="cardl-textt">
                  5) {add.malakaliy5}
                </p>
                <p className="cardl-textt">
                  6) {add.malakaliy6}
                </p>
                <p className="cardl-textt">
                  7) {add.malakaliy7}
                </p>
                
                <h2 className="cardl-titlee mt">LAVOZIMIY MAJBURIYATLARI</h2>
                <p className="cardl-textt">
                  {add.majburiyat}
                </p>
                <h2 className="cardl-titlee mt">ISH SHAROITLARI</h2>
                <p className="cardl-textt">
                  {add.isharoitlari}
                </p>
                <button className="d-but" onClick={DeleteItem}>
                  Delete
                </button>
              </div>
              <div className="cardl-row2-right">
                <div className="cardl-row2-box">
                  <div className="cardl-leftt">
                    <p className="cardl-row-box_text">Oylik:</p>
                    <h2 className="cardl-row-box_price">{add.oylik}</h2>
                    <p className="cardl-row-box_year">Yillik miqdori</p>
                  </div>
                  <div className="arrow"></div>
                  <div className="cardl-rightt">
                    <img src={mapp} alt="" />
                    <h2 className="cardl-row-box_text">Manzil</h2>
                    <p className="cardl-row-box_year">{add.manzil}</p>
                  </div>
                </div>
                <div className="cardl-row2-box2">
                  <h2 className="box2-title">E’lon haqida</h2>
                  <div className="cardl-box2-top">
                    <div className="box2-divs">
                      <img src={iconImg1} alt="" className="divs-img" />
                      <p className="about-img">E’lon qilingan sana</p>
                      <p className="divs-title">{add.elonQilingan}</p>
                    </div>
                    <div className="box2-divs">
                      <img src={iconImg2} alt="" className="divs-img" />
                      <p className="about-img">Tugash sanasi</p>
                      <p className="divs-title">{add.tugashSana}</p>
                    </div>
                    <div className="box2-divs">
                      <img src={iconImg3} alt="" className="divs-img" />
                      <p className="about-img">MAosh</p>
                      <p className="divs-title">Oyiga: {add.oylik}</p>
                    </div>
                    <div className="box2-divs">
                      <img src={iconImg4} alt="" className="divs-img" />
                      <p className="about-img">Malumoti</p>
                      <p className="divs-title">{add.malumoti} </p>
                    </div>
                  </div>
                  <div className="arrowx"></div>
                  <div className="cardl-box2-bottom">
                    <h2 className="box2-title">Ishni ulashish:</h2>
                    <div className="icon-div">
                      <button className="icon-div-btn">
                        <img src={linkk} alt="" className="btn-img" />
                        Linkni nusxalash
                      </button>
                      <img src={btns1} alt="" />
                      <img src={btns2} alt="" />
                      <img src={btns3} alt="" />
                      <img src={btns4} alt="" className="dnn" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cardl-bottom container">
            <h2 className="tavfsiya">TAVSIYA ETILADI</h2>
            <Work />
          </div>
        </div>
      )}
    </div>
  );
}
export default AddList;

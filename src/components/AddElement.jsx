import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import man from "../../imgs/man.png";
import map from "../../imgs/map.png";
import izo from "../../imgs/izo.png";
function AddElement() {
  const [nomi, setNomi] = useState();
  const [oylik, setOylik] = useState();
  const [ishlaysiz, setIshlay] = useState();
  const [manzil, setManzil] = useState();
  const [malakaliy1, setMalakaliy1] = useState();
  const [malakaliy2, setMalakaliy2] = useState();
  const [malakaliy3, setMalakaliy3] = useState();
  const [malakaliy4, setMalakaliy4] = useState();
  const [malakaliy5, setMalakaliy5] = useState();
  const [malakaliy6, setMalakaliy6] = useState();
  const [malakaliy7, setMalakaliy7] = useState();
  const [elonQilingan, setElonQilingan] = useState();
  const [tugashSana, setTugashSana] = useState();
  const [malumoti, setMalumoti] = useState();
  const [majburiyat, setMajburiyat] = useState();
  const [isharoitlari, setIsharoitlari] = useState();
  const history = useNavigate();
  const sendMovies = (e) => {
    e.preventDefault();
    const newmovies = {
      nomi,
      oylik,
      ishlaysiz,
      manzil,
      malakaliy1,
      malakaliy2,
      malakaliy3,
      malakaliy4,
      malakaliy5,
      malakaliy6,
      malakaliy7,
      elonQilingan,
      tugashSana,
      malumoti,
      majburiyat,
      isharoitlari,
    };
    fetch(`https://5b4fe1198f106fc2.mokky.dev/newmovies`, {
      method: "POST",
      body: JSON.stringify(newmovies),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      history("/");
    });
  };
  return (
    <>
      <div className="container">
        <div className="new">
          <div className="img-card">
            <div className="ish-card">
              <h2 className="ish-card-title">{nomi}</h2>
              <div className="ish-card-row">
                <p className="ish-card-text3">TO'LIQ</p>
                <p className="ish-card-text4">oylik: {oylik}</p>
              </div>
              <div className="ish-card-row2">
                <div className="ish-card-roww">
                  <img src={man} alt="" />
                  <div className="ish-card-row-text-box">
                    <h2 className="ish-card-title2">{ishlaysiz}</h2>
                    <p className="ish-card-text2">
                      <img src={map} className="map-img" alt="" />
                      {manzil}
                    </p>
                  </div>
                </div>
                <img src={izo} alt="" />
              </div>
            </div>
          </div>
          <div className="new-bottom">
            <div className="new-right">
              <form onSubmit={sendMovies}>
                <div className="inps-top">
                  <h2 className="malumot">Ishingiz haqida ma'lumot bering</h2>
                  <div className="new_row">
                    <input
                      type="text"
                      required
                      placeholder="Ishingiz nomi"
                      value={nomi}
                      onChange={(e) => setNomi(e.target.value)}
                      name=""
                      id=""
                    />
                    <input
                      type="text"
                      required
                      placeholder="Kim bo'lib ishlaysiz"
                      value={ishlaysiz}
                      onChange={(e) => setIshlay(e.target.value)}
                      name=""
                      id=""
                    />
                    <input
                      type="text"
                      required
                      placeholder="Oyligi qancha"
                      value={oylik}
                      onChange={(e) => setOylik(e.target.value)}
                      name=""
                      id=""
                    />
                    <input
                      type="text"
                      required
                      placeholder="Manzil"
                      value={manzil}
                      onChange={(e) => setManzil(e.target.value)}
                      name=""
                      id=""
                    />
                    <input
                      type="text"
                      required
                      placeholder="E'lon qilingan sana"
                      value={elonQilingan}
                      onChange={(e) => setElonQilingan(e.target.value)}
                      name=""
                      id=""
                    />
                    <input
                      type="text"
                      required
                      placeholder="Tugash sanasi"
                      value={tugashSana}
                      onChange={(e) => setTugashSana(e.target.value)}
                      name=""
                      id=""
                    />
                  </div>
                  <div className="malumoti">
                    <input
                      type="text"
                      required
                      placeholder="Malumoti"
                      value={malumoti}
                      onChange={(e) => setMalumoti(e.target.value)}
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="inps-bottom">
                  <h2 className="malumot">Malakaliy Talablar</h2>
                  <div className="malakaliy">
                    <input
                      type="text"
                      placeholder="1-malakaliy talablar"
                      value={malakaliy1}
                      onChange={(e) => setMalakaliy1(e.target.value)}
                      name=""
                      required
                      id=""
                    />
                    <input
                      type="text"
                      placeholder="2-malakaliy talablar"
                      value={malakaliy2}
                      onChange={(e) => setMalakaliy2(e.target.value)}
                      name=""
                      required
                      id=""
                    />
                    <input
                      type="text"
                      placeholder="3-malakaliy talablar"
                      value={malakaliy3}
                      onChange={(e) => setMalakaliy3(e.target.value)}
                      name=""
                      required
                      id=""
                    />
                    <input
                      type="text"
                      placeholder="4-malakaliy talablar"
                      value={malakaliy4}
                      onChange={(e) => setMalakaliy4(e.target.value)}
                      name=""
                      required
                      id=""
                    />
                    <input
                      type="text"
                      placeholder="5-malakaliy talablar"
                      value={malakaliy5}
                      onChange={(e) => setMalakaliy5(e.target.value)}
                      name=""
                      required
                      id=""
                    />
                    <input
                      type="text"
                      placeholder="6-malakaliy talablar"
                      value={malakaliy6}
                      onChange={(e) => setMalakaliy6(e.target.value)}
                      name=""
                      id=""
                      required
                    />
                    <input
                      type="text"
                      placeholder="7-malakaliy talablar"
                      value={malakaliy7}
                      onChange={(e) => setMalakaliy7(e.target.value)}
                      name=""
                      id=""
                      required
                    />
                    <input
                      type="text"
                      placeholder="Lavozim Majburiyatlari"
                      value={majburiyat}
                      onChange={(e) => setMajburiyat(e.target.value)}
                      name=""
                      id=""
                      required
                    />
                    <input
                      type="text"
                      placeholder="Ish sharoitlari"
                      value={isharoitlari}
                      onChange={(e) => setIsharoitlari(e.target.value)}
                      name=""
                      required
                      id=""
                    />
                  </div>
                </div>
                <button className="input-btn bttnn">Yuborish</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddElement;

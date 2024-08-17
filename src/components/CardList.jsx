import React from "react";
import { useParams } from "react-router-dom";
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
function CardList() {
  const { id } = useParams();
  const { ish } = Fetch("https://5b4fe1198f106fc2.mokky.dev/ish/" + id);
  return (
    <div>
      {ish && (
        <div className="cardlist-wrap">
          <div className="Cardlist container">
            <div className="cardl-row1">
              <div className="cardl-row1-left">
                <img src={radius} alt="" className="cardl-row1-img" />
                <div className="cardl-all-text">
                  <h2 className="title">{ish.title}</h2>
                  <p className="about-title">{ish.about}</p>
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
                <p className="cardl-textt">1) Oliy maʼlumotga ega bo‘lgan</p>
                <p className="cardl-textt">
                  2) Iqtisod, Gumanitar sohasi, Psixologiya, Sotsiologiya
                </p>
                <p className="cardl-textt">
                  3) Davlat tilini mukammal bilishi;
                </p>
                <p className="cardl-textt">
                  4) Xorijiy tillarni yaxshi bilishga ustunlik beriladi (IELTS
                  5,5, CEFR)
                </p>
                <p className="cardl-textt">
                  5) Xorijiy oliy maʼlumotga ustunlik beriladi.
                </p>
                <p className="cardl-textt">
                  6) Davlat organlari va tashkilotlarida kamida 4 yil mehnat
                  stajiga ega bo‘lgan,
                </p>
                <p className="cardl-textt">
                  7) Ohirgi 2 yil davomida boshqaruv lavozimlarida faoliyat
                  yuritgan.
                </p>
                <p className="cardl-textt">
                  8) Strategik fikrlash, tizimli tahlil, ijro intizomi,
                  boshqaruv qarorlarini qabul qilish, jamoani shakllantirish va
                  boshqaruv ko‘nikmalariga ega bo‘lishi;
                </p>
                <p className="cardl-textt">
                  9) Davlat xizmatchilarini psixologik baholash bo‘yicha
                  ilmiy-amaliy metodika (usul)larni bilishi, qo‘llay olish
                  tajribasi va tahlil qilish ko‘nikmasiga ega bo‘lishi lozim.
                </p>
                <p className="cardl-textt">
                  10) So‘rovnomalarni shakllantirish, moslashtirish,
                  aprobatsiyadan o‘tkazish, natijasini tahlil qilish hamda ular
                  bo‘yicha aniq taklif, shuningdek muammoli masalalarni yechish
                  qobiliyatiga ega bo‘lishi lozim.
                </p>
                <p className="cardl-textt">
                  11) Davlat organlari va tashkilotlaridan salbiy sabablarga
                  ko‘ra belgilangan tartibda bo‘shatilmagan bo‘lishi lozim.
                </p>
                <h2 className="cardl-titlee mt">LAVOZIMIY MAJBURIYATLARI</h2>
                <p className="cardl-textt">
                  O‘rnatilgan lavozim yo‘riqnomasi talablarini bajarish,
                  mamlakatimizda amalga oshirilayotgan islohotlarning,
                  O‘zbekiston Respublikasi Prezidentining maʼruzalari va
                  chiqishlarida ko‘tarilgan dolzarb masalalarning
                  mazmun-mohiyatini, Agentlikning vazifalari va faoliyat
                  ko‘rsatkichlari haqida doimiy ravishda xabardor bo‘lishi,
                  odob-axloq qoidalariga so‘zsiz rioya qilishi; davlat fuqarolik
                  xizmatiga doir qonun hujjatlarini qo‘llash va davlat organlari
                  va tashkilotlarining kadrlar bo‘linmalari faoliyatiga uslubiy
                  rahbarlik qilish va uni muvofiqlashtirish uchun zarur bilim va
                  ko‘nikmalarga ega bo‘lishi; xizmat faoliyati davomida turli
                  soha mutaxassislari, ekspertlar va jamoatchilik vakillari
                  bilan samarali hamkorlikni yo‘lga qo‘yishi zarur.
                </p>
                <h2 className="cardl-titlee mt">ISH SHAROITLARI</h2>
                <p className="cardl-textt">
                  Ish kunlari: dushanba, seshanba, chorshanba, payshanba, juma.
                  Dam olish kunlari: shanba, yakshanba. Ish vaqti: 09:00 dan
                  18:00 gacha
                </p>
              </div>
              <div className="cardl-row2-right">
                <div className="cardl-row2-box">
                  <div className="cardl-leftt">
                    <p className="cardl-row-box_text">Oylik:</p>
                    <h2 className="cardl-row-box_price">{ish.price}</h2>
                    <p className="cardl-row-box_year">Yillik miqdori</p>
                  </div>
                  <div className="arrow"></div>
                  <div className="cardl-rightt">
                    <img src={mapp} alt="" />
                    <h2 className="cardl-row-box_text">Manzil</h2>
                    <p className="cardl-row-box_year">{ish.place}</p>
                  </div>
                </div>
                <div className="cardl-row2-box2">
                  <h2 className="box2-title">E’lon haqida</h2>
                  <div className="cardl-box2-top">
                    <div className="box2-divs">
                      <img src={iconImg1} alt="" className="divs-img" />
                      <p className="about-img">E’lon qilingan sana</p>
                      <p className="divs-title">14 Aprel, 2024</p>
                    </div>
                    <div className="box2-divs">
                      <img src={iconImg2} alt="" className="divs-img" />
                      <p className="about-img">Tugash sanasi</p>
                      <p className="divs-title">14 May, 2024</p>
                    </div>
                    <div className="box2-divs">
                      <img src={iconImg3} alt="" className="divs-img" />
                      <p className="about-img">MAosh</p>
                      <p className="divs-title">
                        Oyiga: {ish.price}
                      </p>
                    </div>
                    <div className="box2-divs">
                      <img src={iconImg4} alt="" className="divs-img" />
                      <p className="about-img">Malumoti</p>
                      <p className="divs-title">Oliy </p>
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
export default CardList;

import React from "react";
import img1 from "../../imgs/img1.png";
import img2 from "../../imgs/homeIcon (4).png";
import img3 from "../../imgs/homeIcon (3).png";
import img4 from "../../imgs/homeIcon (2).png";
import img5 from "../../imgs/homeIcon (1).png";
import how1 from "../../imgs/how (1).png";
import how2 from "../../imgs/how (2).png";
import how3 from "../../imgs/how (3).png";
import how4 from "../../imgs/how (4).png";
import right from "../../imgs/right.png";
import stars from "../../imgs/stars.png";
import dot from "../../imgs/Vector.png";
import imgs from "../../imgs/Image.png";
import Fetch from "./Fetch";
import Work from "./Work";
import Card from "./Card";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
function Home() {
  const { empty } = Fetch("https://5b4fe1198f106fc2.mokky.dev/empty");
  const { idea } = Fetch("https://5b4fe1198f106fc2.mokky.dev/idea");

  return (
    <div className="Wrap mtt">
      <div className="bg">
        <div className="home container">
          <div className="home-left">
            <h2 className="home-title">
              Qiziqish va ko'nikmalaringizga mos keladigan ishni
              toping.
            </h2>
            <div className="inp-box2">
              <input
                type="text"
                placeholder="Ish nomini kiriting"
                className="inp-box_inp"
              />
              <input
                type="text"
                placeholder="Manzilingiz"
                className="inp-box_inp"
              />
              <button className="home-btn">Izlash</button>
            </div>
            <p className="misol">
              <span className="misoll"> Misol uchun:</span> Dizayner, Dasturchi,
              O’qituvchi, Bog’bon, Menejer.
            </p>
          </div>
          <div className="home-right">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="about container">
          <div className="about-card">
            <img src={img2} alt="" className="about-card-img" />
            <div className="about-text-box">
              <h2 className="about-title">3000</h2>
              <p className="about-text">Aktiv ish o’rinlari</p>
            </div>
          </div>
          <div className="about-card">
            <img src={img3} alt="" className="about-card-img" />
            <div className="about-text-box">
              <h2 className="about-title">200</h2>
              <p className="about-text">Kompaniyar soni</p>
            </div>
          </div>
          <div className="about-card">
            <img src={img4} alt="" className="about-card-img" />
            <div className="about-text-box">
              <h2 className="about-title">38,47,154</h2>
              <p className="about-text">Nomzodlar</p>
            </div>
          </div>
          <div className="about-card">
            <img src={img5} alt="" className="about-card-img" />
            <div className="about-text-box">
              <h2 className="about-title">500</h2>
              <p className="about-text">Yangi ish o’rinlari</p>
            </div>
          </div>
        </div>
      </div>
      <div className="empty container">
        <h2 className="empty-title2">Ommabop bo'sh ish o'rinlari</h2>
        <div className="empty-row">
          {empty &&
            empty.map((e) => {
              return (
                <div className="empty-card" key={e.id}>
                  <h2 className="empty-title">{e.title}</h2>
                  <p className="empty-text">{e.text}</p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="bg howw">
        <div className="how-title">FASLMARKET QANDAY ISHLAYDI</div>
        <div className="how container">
          <div className="how-row">
            <div className="how-card">
              <img src={how1} alt="" className="how-card-img" />
              <h2 className="how-card-title">Account yarating</h2>
              <p className="how-card-text">
                Faslmarket web sahifasidan ro’yhatdan o’ting
              </p>
            </div>
            <div className="how-card">
              <img src={how2} alt="" className="how-card-img" />
              <h2 className="how-card-title">Rezyumeni yuklang</h2>
              <p className="how-card-text">
                Shahsingizni va kasb malakangiz haqidagi hujjatni yuklang
              </p>
            </div>
            <div className="how-card">
              <img src={how3} alt="" className="how-card-img" />
              <h2 className="how-card-title">Ishni izlang</h2>
              <p className="how-card-text">
                Mutaxassisligingiz yoki hunaringizga mos kasbni tanlang
              </p>
            </div>
            <div className="how-card">
              <img src={how4} alt="" className="how-card-img" />
              <h2 className="how-card-title">Ishli bo’ling</h2>
              <p className="how-card-text">
                Barcha bosqichlardan muvaffaqiyatli o’tganingiz bilan
                tabriklaymiz!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ish container">
        <div className="ish-row">
          <h2 className="ish-title">Ish o’rinlari</h2>
          <Link to={"have"}>
            <button className="ish-btn">
              Hammasini ko’rish <img src={right} alt="" />
            </button>
          </Link>
        </div>
        <div>
          <Work />
        </div>
      </div>
      <div className="idea bg">
        <div className="container">
          <h2 className="idea-title">Mijozlar fikirlari</h2>
          <Swiper
            breakpoints={{
              1200: {
                slidesPerView: 3.3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3.3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {idea &&
              idea.map((b) => {
                return (
                  <SwiperSlide>
                    <div className="i-card" key={b.id}>
                      <img src={stars} alt="" className="star" />
                      <p className="i-card-text">{b.text}</p>
                      <div className="i-card-bottom">
                        <div className="i-card-b-left">
                          <img src={imgs} alt="" />
                          <div className="i-card-text-box">
                            <h3 className="i-card-name">{b.name}</h3>
                            <p className="hobby">{b.hobby}</p>
                          </div>
                        </div>
                        <img src={dot} alt="" className="dot" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
      <div className="info container">
        <div className="info-row">
          <div className="info-card bg1">
            <h2 className="info-card-title">Nomzodga aylaning</h2>
            <p className="info-card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              cursus a dolor convallis efficitur.
            </p>
            <button className="info-card-btn">Ro’yhatdan o’ting</button>
          </div>
          <div className="info-card bg2">
            <h2 className="info-card-title color-white">
              Ish beruvchiga aylaning
            </h2>
            <p className="info-card-text color-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              cursus a dolor convallis efficitur.
            </p>
            <button className="info-card-btn">Ro’yhatdan o’ting</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

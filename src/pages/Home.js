import React from "react";
import styles from "../styles/Home.module.scss";
import "../styles/Home.css";
//Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Butobere from "../img/Butobere - Muyumbu Road/Butobere - Muyumbu Road5.JPG";
import bulisa1 from "../img/Emergency road repairs along kabale-kisoro road/IMG_6693.jpg";
import bulisa2 from "../img/Emergency road repairs along kabale-kisoro road/IMG_6693.jpg";
import bulisa3 from "../img/buliisa oil roads/bulisa oil roads 4.JPG";
import Butobere1 from "../img/Butobere - Muyumbu Road/Butobere - Muyumbu Road8.JPG";
import kabale1 from "../img/fwdemergencyrepairskabalekisororoad/IMG_20240817_174845.jpg";
import kabale from "../img/fwdemergencyrepairskabalekisororoad/IMG_20240817_174230.jpg";
import kanungu from "../img/fwdemergencyrepairskabalekisororoad/IMG_20240817_174041.jpg";
import kanungu1 from "../img/Rukungiri -Birara-Kanungu Road works/Birara-Kanungu Road work9.JPG";
import buwama from "../img/Buwama-Kagongi-Migani Road/Buwama-Kagongi-Migani Road2.JPG";
import buwama1 from "../img/Buwama-Kagongi-Migani Road/Buwama-Kagongi-Migani Road1.JPG";
import migani from "../img/Buwama-Kagongi-Migani Road Nakaseke District/Migani Road Nakaseke.JPG";
import migani1 from "../img/Buwama-Kagongi-Migani Road Nakaseke District/Buwama-Kagongi-Migani Road Nakaseke District4.JPG";
import rukiga from "../img/Low cost sealing project works in Rukiga District/Rukiga District2.JPG";
import muyumbu from "../img/Butobere -Muyumbu road in UNRA kabale station/Butobere -Muyumbu road in UNRA kabale station3.JPG";
import rukiga2 from "../img/Low cost sealing project works in Rukiga District/Rukiga District5.jpg";
import kabale4 from "../img/Emergency road repairs along kabale-kisoro road/IMG_6688.jpg";
import kabale5 from "../img/fwdemergencyrepairskabalekisororoad/IMG_20240817_174103.jpg";
import kabale6 from "../img/fwdemergencyrepairskabalekisororoad/IMG_20240817_153743.jpg";
import machine1 from "../img/machines2/IMG-20250107-WA0011.jpg";
import zonal from "../img/soroti-project/3c39eca3-0338-4c50-9b56-9f63141671cc.jpg";
import zonal1 from "../img/soroti-project/a8d164ff-c706-45eb-b4d3-e24e8397e97b.jpg";
import zonal2 from "../img/soroti-project/179a135b-61c8-43ec-b4b3-8c950db612e5.jpg";
import kumi from "../img/kumi/kumi2.jpg";
import kumi1 from "../img/kumi/kumi.jpg";
import kumi2 from "../img/kumi/IMG_8328.jpg";
import dam from "../img/Kajamaka earth dam.jpg";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
const Home = () => {
  return (
    <div className={styles.container}>
      <h2>Greystone Investments Limited</h2>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          // when window width is >= 640px
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 320px
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        updateOnWindowResize={true}
        className={styles.myswiper}
      >
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={dam} alt="slider" />
            <span>kajamaka earth dam in kumi district </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={machine1} alt="slider" />
            <span>kajamaka earth dam in kumi district </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={zonal} alt="slider" />
            <span>
              Construction of Zonal Animal Zonal Animal diseases control centres
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={zonal1} alt="slider" />
            <span>
              Construction of Zonal Animal Zonal Animal diseases control centres
              in soroti
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={zonal2} alt="slider" />
            <span>
              Construction of Zonal Animal Zonal Animal diseases control centres
              in soroti
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={kumi} alt="slider" />
            <span>Community Access Roads in Ongino Sub County Kumi </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={kumi1} alt="slider" />
            <span>Community Access Roads in Ongino Sub County Kumi </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={kumi2} alt="slider" />
            <span>Community Access Roads in Ongino Sub County Kumi </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={kabale4} alt="slider" />
            <span>Emergency road repairs along kabale-kisoro road</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={kabale5} alt="slider" />
            <span>Emergency repairs of kabale-kisoro road</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={kabale6} alt="slider" />
            <span>Emergency repairs of kabale-kisoro road</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={bulisa1} alt="slider" />
            <span>Emergency road repairs along kabale-kisoro road</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={bulisa2} alt="slider" />
            <span>Emergency repairs of kabale-kisoro road</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={rukiga2} alt="slider" />
            <span>Low cost sealing project works in Rukiga District</span>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={kanungu} alt="slider" />
            <span>Emergency repairs of kabale-kisoro road</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={bulisa3} alt="slider" />
            <span>Road construction in Bulisa</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={muyumbu} alt="slider" />
            <span>Road construction in Butobere -Muyumbu road</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={Butobere} alt="slider" />
            <span>Road construction in Butobere -Muyumbu road </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={Butobere1} alt="slider" />
            <span>Road construction in Butobere -Muyumbu road</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={kabale} alt="slider" />

            <span>Emergency repairs of kabale-kisoro road</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={kabale1} alt="slider" />
            <span>Emergency repairs of kabale-kisoro road</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={kanungu1} alt="slider" />
            <span>Road construction in kanungu</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={buwama} alt="slider" />
            <span>Road construction in buwama</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={buwama1} alt="slider" />
            <span>Road construction in buwama </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={migani} alt="slider" />
            <span>Road construction in Buwama </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={migani1} alt="slider" />
            <span>Road construction in Migani </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={rukiga} alt="slider" />
            <span>Road construction in Rukiga </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;

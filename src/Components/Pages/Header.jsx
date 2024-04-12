import banner from "/resources/banner.jpg";
import banner1 from "/resources/banner1.jpg";
import banner2 from "/resources/banner2.jpg";
import banner3 from "/resources/banner3.jpg";
import banner4 from "/resources/banner4.jpg";
import banner5 from "/resources/banner5.jpg";
import { FaAngleDown } from "react-icons/fa6";
import 'animate.css';
import "swiper/css";
import "swiper/css/pagination";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Header = () => {
  return (
    <header data-aos="flip-up" data-aos-duration="700" className="text-4xl font-semibold relative h-[70vh] lg:min-h-[calc(100vh-64px)] text-white">
      <div className="h-[70vh] lg:min-h-screen absolute top-0 left-0 w-full">
        <Swiper
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 1700,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="w-full h-[70vh] lg:h-screen" src={banner} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[70vh] lg:h-screen" src={banner1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[70vh] lg:h-screen" src={banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[70vh] lg:h-screen" src={banner3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[70vh] lg:h-screen" src={banner4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[70vh] lg:h-screen" src={banner5} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="absolute top-[30%] lg:top-[39%] animate__animated animate__zoomInDown lg:left-[30%] z-20 max-w-2xl text-center space-y-4">
          <h1 className="text-6xl font-bold">Welcome Home Explore <span className="text-[#FAB63E]">Residential</span> Living</h1>
          <button className="text-3xl flex flex-col items-center text-center w-full pt-10">
          <FaAngleDown className="animate-bounce text-[#FAB63E] mt-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

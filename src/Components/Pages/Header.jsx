// import banner4 from "/resources/banner4.jpg";
// import banner5 from "/resources/banner5.jpg";
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
            <img className="w-full h-[70vh] lg:h-screen" src={`https://i.ibb.co/rcvgBBS/banner.jpg`} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[70vh] lg:h-screen" src={`https://i.ibb.co/ZBK2L7g/banner1.jpg`} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[70vh] lg:h-screen" src={`https://i.ibb.co/RPqnmjf/banner2.jpg`} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[70vh] lg:h-screen" src={`https://i.ibb.co/0F5f8KX/banner3.jpg`} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[70vh] lg:h-screen" src={`https://i.ibb.co/XsFfYpF/banner4.jpg`} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[70vh] lg:h-screen" src={`https://i.ibb.co/mqDy1Yw/banner5.jpg`} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[70vh] lg:h-screen" src={`https://i.ibb.co/tq19jKQ/banner6.jpg`} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="absolute top-[30%] lg:top-[39%] animate__animated animate__zoomInDown lg:left-[30%] z-20 max-w-2xl text-center space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold">Welcome To Home Explore <span className="text-[#FAB63E]">Residential</span> Living</h1>
          <button className="text-3xl flex flex-col items-center text-center w-full pt-10">
          <FaAngleDown className="animate-bounce text-[#FAB63E] mt-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

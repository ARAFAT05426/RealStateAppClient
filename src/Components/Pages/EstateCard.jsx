import PropTypes from "prop-types";
import { GrLocation } from "react-icons/gr";
import { FaMapSigns } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const EstateCard = ({ data }) => {
  const { id, area, image, estate_title, price, location, status } = data;
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1300"
      className="p-5 mx-auto sm:p-10 md:p-16 text-gray-800 hover:-translate-y-4 transition-transform duration-700"
    >
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img src={image} alt="" className="w-full h-60 sm:h-96 " />
        <div
          data-aos="flip-down"
          data-aos-delay="300"
          className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50"
        >
          <div className="space-y-2">
            <a
              rel="noopener noreferrer"
              className="inline-block text-xl font-semibold"
            >
              {estate_title}
            </a>
            <div className="flex items-center justify-between">
              <p className="text-xs text-[#112D4E] flex items-center cursor-pointer gap-1">
                <GrLocation className="text-[#FAB63E]" />
                <a
                  rel="noopener noreferrer"
                  className="text-xs font-bold hover:underline"
                >
                  {location}
                </a>
              </p>
              <p className="text-xs text-[#112D4E] flex items-center cursor-pointer gap-1">
                <FaMapSigns className="text-[#FAB63E]" />
                <a
                  rel="noopener noreferrer"
                  className="text-xs font-bold hover:underline"
                >
                  {area}
                </a>
              </p>
            </div>
          </div>
          <hr />
          <div className="text-[#112D4E]">
            <div className="flex justify-between items-center">
              <p className="text-sm font-bold">{price}</p>
              <div>
                <button className="px-3 py-1 bg-[#FAB63E] text-white text-sm font-semibold rounded-sm">
                  {status}
                </button>
              </div>
            </div>
          </div>
          <div data-aos="flip-up" data-aos-duration="1300">
            <Link to={`/estates/${id}`}>
              <button className="w-full px-5 py-3 bg-[#FAB63E] font-semibold text-white mt-3">
                View Property
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
EstateCard.propTypes = {
  data: PropTypes.object,
};
export default EstateCard;

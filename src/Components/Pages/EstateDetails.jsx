import { useLoaderData, useParams } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { FaMapSigns } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { GrStatusUnknown } from "react-icons/gr";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const EstateDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const filtered = data?.find((item) => item?.id === id);
  const {
    image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = filtered;
  return (
    <div className="text-7xl max-w-screen-2xl h-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20">
      <Helmet>
        <title>kState || Property {id}</title>
      </Helmet>
      <div data-aos="zoom-in" data-aos-duration="800">
        <img className="w-full h-[80vh] p-6" src={image} alt="" />
      </div>
      <div className="bg-white ">
        <div className="flex flex-col h-fit lg:h-[70vh] px-5 py-3 w-full space-y-3">
          <div className="flex flex-col justify-between grow-0 lg:grow">
            <div className="">
              <div
                data-aos="flip-down"
                data-aos-delay="400"
                data-aos-duration="200"
              >
                <h1 className="text-3xl font-bold">{estate_title}</h1>
              </div>
              <div className="flex flex-col space-y-2 mt-2">
                <div data-aos="flip-down" data-aos-delay="550">
                  <span className=" flex items-center gap-2 cursor-pointer text-lg">
                    <GrLocation className="text-[#FAB63E]" />
                    <p className="text-sm hover:underline font-semibold">
                      {location}
                    </p>
                  </span>
                </div>
                <div data-aos="flip-down" data-aos-delay="700">
                  <span className=" flex items-center gap-2 cursor-pointer text-lg">
                    <FaMapSigns className="text-[#FAB63E]" />
                    <p className="text-sm hover:underline font-semibold">
                      {area}
                    </p>
                  </span>
                </div>
                <div data-aos="flip-down" data-aos-delay="850">
                  <span className=" flex items-center gap-2 cursor-pointer text-lg">
                    <BiCategory className="text-[#FAB63E]" />
                    <p className="text-sm hover:underline font-semibold">
                      {segment_name}
                    </p>
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="flex flex-col text-2xl font-bold space-y-3">
                  <div data-aos="flip-down" data-aos-delay="950">
                    Description
                  </div>
                  <div data-aos="flip-down" data-aos-delay="1050">
                    <p className="text-sm opacity-70 font-semibold ">
                      {description}
                    </p>
                  </div>
                  <div>
                    <div data-aos="flip-down" data-aos-delay="1150">
                      <h1>Facilities</h1>
                    </div>
                    <div data-aos="flip-down" data-aos-delay="1250" className="flex gap-2">
                      {facilities.map((item, idx) => (
                        <p
                          className="text-sm font-semibold opacity-70"
                          key={idx}
                        >
                          {item},
                        </p>
                      ))}
                    </div>
                  </div>
                </span>
              </div>
              <div data-aos="flip-down" data-aos-delay="1350" className="text-xl flex gap-2 items-center mt-3 uppercase italic font-bold">
                <GrStatusUnknown className="text-[#FAB63E] text-2xl" />
                {status}
              </div>
            </div>
          </div>
        </div>
        <div data-aos="flip-down" data-aos-delay="1450" className="flex items-center justify-center gap-2 text-center w-full bg-[#FAB63E] rounded text-3xl px-5 py-3 cursor-pointer">
          <GiPriceTag className="text-white" />
          <p className="text-white text-xl">{price.split("$")}</p>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;

import { useLoaderData, useParams } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { FaMapSigns } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { GrStatusUnknown } from "react-icons/gr";
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
    <div className="text-7xl max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20">
      <img className="w-full h-[80vh] px-5 py-3" src={image} alt="" />
      <div className="bg-white ">
        <div className="flex flex-col h-full lg:h-[70vh] px-3 py-3 w-full space-y-3">
          <div className="flex flex-col justify-between grow">
            <div className="">
              <h1 className="text-3xl font-bold">{estate_title}</h1>
              <div className="flex flex-col space-y-2 mt-2">
                <span className=" flex items-center gap-2 cursor-pointer text-lg">
                  <GrLocation className="text-[#FAB63E]" />
                  <p className="text-sm hover:underline font-semibold">
                    {location}
                  </p>
                </span>
                <span className=" flex items-center gap-2 cursor-pointer text-lg">
                  <FaMapSigns className="text-[#FAB63E]" />
                  <p className="text-sm hover:underline font-semibold">
                    {area}
                  </p>
                </span>
                <span className=" flex items-center gap-2 cursor-pointer text-lg">
                  <BiCategory className="text-[#FAB63E]" />
                  <p className="text-sm hover:underline font-semibold">
                    {segment_name}
                  </p>
                </span>
              </div>
              <div className="flex flex-col mt-4">
                <span className="flex flex-col text-2xl font-bold space-y-3">
                  Description
                  <p className="text-sm opacity-70 font-semibold ">
                    {description}
                  </p>
                  <div>
                    <h1>Facilities</h1>
                    <div className="flex gap-2">
                    {facilities.map((item, idx) => (
                      <p className="text-sm font-semibold opacity-70" key={idx}>
                        {item},
                      </p>
                    ))}
                    </div>
                  </div>
                </span>
              </div>
              <div className="text-xl flex gap-2 items-center mt-3 uppercase italic font-bold">
                <GrStatusUnknown className="text-[#FAB63E] text-2xl" />
                {status}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 text-center w-full bg-[#FAB63E] rounded text-3xl px-5 py-3 cursor-pointer">
          <GiPriceTag className="text-white" />
          <p className="text-white text-xl">{price.split("$")}</p>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;

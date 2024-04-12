import { Link } from "react-router-dom";
import useData from "../../Hooks/useData";
import EstateCard from "./EstateCard";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Estates = () => {
  const data = useData();
  return (
    <div className="mt-5 lg:mt-16">
      <div data-aos="fade-down">
        <h1 className="text-center text-5xl font-bold">Estate</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {data.slice(0, 6).map((item, idx) => (
          <EstateCard key={idx} data={item}></EstateCard>
        ))}
      </div>
      <div data-aos="flip-up" data-aos-duration="1300">
        <Link className="" to={"/properties"}>
          <h1 className="text-center px-5 py-3 bg-[#FAB63E] font-semibold text-white w-fit mx-auto mb-7">
            Explore More
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Estates;

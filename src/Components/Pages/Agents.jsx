import Member from "../Member";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
AOS.init();
const Agents = () => {
  return (
    <div>
      <Helmet>
        <title>kState || Agents</title>
      </Helmet>
      <div className="bg-white ">
        <div className=" space-y-16 px-4 py-16">
          {/* Heading */}
          <div className="text-center">
            <div
              data-aos="flip-down"
              data-aos-duration="300"
              className="mb-1 text-sm font-bold uppercase tracking-wider text-[#FAB63E] "
            >
              Real-Estate Agents
            </div>
            <div data-aos="flip-down" data-aos-delay="300">
              <h2 className="mb-4 text-4xl font-black text-[#1F2937]">
                Meet our talented team
              </h2>
            </div>
            <div data-aos="flip-down" data-aos-delay="400">
              <h3 className="mx-auto text-xl font-medium leading-relaxed text-gray-700 lg:w-2/3">
                They are working nonstop behind the scenes to help you find best
                home, stay and rentals.
              </h3>
            </div>
          </div>
          {/* END Heading */}

          {/* Team */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-3 lg:px-28">
            <Member
              name={"David Miller"}
              position={"Senior Real Estate Agent"}
              url={"https://i.ibb.co/Drtbw0n/pexels-photo-8353835.webp"}
            />
            <Member
              name={"Emily Parker"}
              position={" Property Manager"}
              url={"https://i.ibb.co/DMv32nz/pexels-photo-1181690.webp"}
            />
            <Member
              name={"Tyler Reed"}
              position={" Commercial Broker"}
              url={"https://i.ibb.co/pKp6w7X/pexels-photo-7821936.webp"}
            />
            <Member
              name={"Ryan Smith"}
              position={"Residential Realtor"}
              url={"https://i.ibb.co/sKrchWR/pexels-photo-8428101.webp"}
            />
            <Member
              name={"Mark Johnson"}
              position={" Investment Consultant"}
              url={"https://i.ibb.co/C8QzNWL/20.jpg"}
            />
            <Member
              name={" Jessica Bennett "}
              position={"Marketing Coordinator"}
              url={"https://i.ibb.co/khBJvrj/pexels-photo-1181519.webp"}
            />
            <Member
              name={"Samantha Carter "}
              position={"Mortgage Advisor"}
              url={"https://i.ibb.co/vhNnBkj/pexels-photo-9171215.webp"}
            />
            <Member
              name={"Josef Evans"}
              position={"Leasing Specialist"}
              url={"https://i.ibb.co/VVBtCFb/pexels-photo-18562277.webp"}
            />
          </div>
          {/* END Team */}
        </div>
      </div>
    </div>
  );
};

export default Agents;

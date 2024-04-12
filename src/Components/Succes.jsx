import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Succes = () => {
  return (
    <>
      {/* Statistics Section: Simple */}
      <div data-aos="flip-down" data-aos-duration="700" data-aos-delay="300" className="bg-white text-gray-100 border-y my-10">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="grid grid-cols-1 divide-y text-center divide-gray-700/75 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <dl className="space-y-1 px-5 py-8">
              <dt className="text-6xl font-extrabold text-[#FAB63E]">
                8,600+
              </dt>
              <dd className="text-sm font-bold uppercase tracking-wide text-[#1F2937]">
                Projects
              </dd>
            </dl>
            <dl className="space-y-1 px-5 py-8">
              <dt className="text-6xl font-extrabold text-[#FAB63E]">
                2,500+
              </dt>
              <dd className="text-sm font-bold uppercase tracking-wide text-[#1F2937]">
                Clients
              </dd>
            </dl>
            <dl className="space-y-1 px-5 py-8">
              <dt className="text-6xl font-extrabold text-[#FAB63E]">
                760k+
              </dt>
              <dd className="text-sm font-bold uppercase tracking-wide text-[#1F2937]">
                Lands
              </dd>
            </dl>
          </div>
        </div>
      </div>
      {/* END Statistics Section: Simple */}
    </>
  );
};

export default Succes;

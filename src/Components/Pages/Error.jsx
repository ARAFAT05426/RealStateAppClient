import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Error = () => {
  return (
    <section className="flex items-center min-h-screen p-16 bg-gray-50 text-[#112D4E]">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <div data-aos="zoom-in" data-aos-duration="700">
            <h2 className="mb-8 font-extrabold text-9xl">404</h2>
          </div>
          <div data-aos="flip-down" data-aos-delay="450">
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldnt find this page.
            </p>
          </div>
          <div data-aos="flip-down" data-aos-delay="600">
            <p className="mt-4 mb-8 text-[#112D4E]">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
          </div>
          <div data-aos="flip-down" data-aos-delay="750">
            <Link
              to={"/"}
              className="px-8 py-3 font-semibold rounded bg-[#FAB63E] text-[#112D4E]"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;

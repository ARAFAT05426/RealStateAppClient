import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>kState || Contact</title>
      </Helmet>
      <section className="flex items-center justify-center min-h-[calc(100vh-120px)] w-full px-3 md:px-20 lg:px-32 my-16 lg:my-12">
        <div className="grid grid-cols-1 gap-8 px-8 py-16 w-full rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <div data-aos="flip-down" data-aos-duration="400">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                  Let`s talk!
                </h2>
              </div>
              <div
                data-aos="flip-down"
                data-aos-delay="400"
                className="text-gray-600"
              >
                Vivamus in nisl metus? Phasellus.
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="500">
              <img
                src="https://i.ibb.co/f43GqtM/12982910-5124556-removebg.png"
                alt=""
                className="p-6"
              />
            </div>
          </div>
          <form noValidate="" className="space-y-6 flex flex-col">
            <div data-aos="flip-down" data-aos-duration="400">
              <label htmlFor="name" className="text-lg font-bold">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full border-2 p-3 rounded bg-gray-100"
              />
            </div>
            <div data-aos="flip-down" data-aos-delay="400">
              <label htmlFor="email" className="text-lg font-bold">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border-2 p-3 rounded bg-gray-100"
              />
            </div>
            <div data-aos="flip-down" data-aos-delay="550" className="grow">
              <label htmlFor="message" className="text-lg font-bold">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full h-4/5 border-2 p-3 rounded bg-gray-100"
              ></textarea>
            </div>
            <div
            data-aos="flip-down" data-aos-delay="900" 
             className="flex items-center justify-center gap-2 text-center w-full bg-[#FAB63E] rounded text-3xl px-5 py-3 cursor-pointer">
              <p className="text-white text-xl">Send</p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

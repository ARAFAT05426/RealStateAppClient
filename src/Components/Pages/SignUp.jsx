import { Link } from "react-router-dom";
import logo from "/resources/logo.png";
import loginBg from "/resources/loginBg.jpg";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import authConfigContext from "../../Hooks/authConfigContext";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const SignUp = () => {
  const [hide, setHide] = useState(false);
  const { handleCreateUser, handleSignOut, handleUpdateProfile } = useContext(authConfigContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data,e) => {
    const { name, email, password, url } = data;
    handleCreateUser(email, password)
      .then(() => {
        handleUpdateProfile(name, url)
        handleSignOut().then(() => {});
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className=""
      style={{
        backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(${loginBg})`,
      }}
    >
      <div className="flex justify-center items-center w-full min-h-screen text-gray-800">
        <div
          data-aos="zoom-in-up"
          data-aos-delay="200"
          className="rounded-3xl bg-white/50 backdrop:blur-xl w-[90%] lg:w-1/4 p-6 relative"
        >
          <div
            className="inline-block p-2 text-white rounded-md absolute left-1/2 transform -translate-x-1/2 -translate-y-16"
            style={{
              background:
                "linear-gradient(180deg, rgba(31,61,96,1) 0%, rgba(250,182,62,0.6138830532212884) 100%)",
            }}
          >
            <img className="w-24" src={logo} alt="" />
          </div>
          <h1 className="text-xl font-semibold text-center my-8">SignUp</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div data-aos="flip-up" data-aos-duration="300">
              <input
                {...register("name", { required: true })}
                placeholder="Name..."
                className="w-full px-4 py-3 rounded border text-sm font-light"
              ></input>
              {errors.email && (
                <span className="text-xs text-[#FF0000]">
                  This field is required
                </span>
              )}
            </div>
            <div data-aos="flip-up" data-aos-delay="300">
              <input
                {...register("email", { required: true })}
                placeholder="Email..."
                className="w-full px-4 py-3 rounded border text-sm font-light"
              ></input>
              {errors.email && (
                <span className="text-xs text-[#FF0000]">
                  This field is required
                </span>
              )}
            </div>
            <div data-aos="flip-up" data-aos-delay="600">
              <input
                {...register("url")}
                placeholder="Photo URL..."
                className="w-full px-4 py-3 rounded border text-sm font-light"
              ></input>
              {errors.email && (
                <span className="text-xs text-[#FF0000]">
                  This field is required
                </span>
              )}
            </div>
            <div data-aos="flip-up" data-aos-delay="800">
              <div className="flex bg-white h-12 focus-within:outline outline-2 items-center gap-1w-full px-4 py-3 rounded border text-sm font-light">
                <input
                  {...register("password", { required: true })}
                  type={`${hide === false ? "password" : "text"}`}
                  placeholder="Password..."
                  className="w-full py-1 bg-transparent outline-none rounded text-sm font-light"
                ></input>
                {hide ? (
                  <AiOutlineEyeInvisible
                    onClick={() => setHide(!hide)}
                    className="text-4xl px-1 py-1 opacity-80 bg-transparent cursor-pointer "
                  />
                ) : (
                  <AiOutlineEye
                    onClick={() => setHide(!hide)}
                    className=" cursor-pointer text-4xl px-1 py-1 opacity-80 bg-transparent"
                  />
                )}
              </div>

              {errors.email && (
                <span className="text-xs text-[#FF0000]">
                  This field is required
                </span>
              )}
            </div>
            <button
              data-aos="flip-up"
              data-aos-delay="1000"
              type="submit"
              className="block w-full py-2 bg-[#FAB63E] transition-colors text-[#112D4E] font-bold rounded mx-auto mt-8"
            >
              Sign Up
            </button>
            <div data-aos="flip-up" data-aos-delay="1200">
              <p className="text-sm w-[95%] mx-auto text-center mt-2 text-[#112D4E]">
                Already have an account?{" "}
                <Link className="text-blue-700 hover:underline" to={"/logIn"}>
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/resources/logo.png";
import google from "/resources/google.png";
import github from "/resources/github.png";
import loginBg from "/resources/loginBg.jpg";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import authConfigContext from "../../Hooks/authConfigContext";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { Helmet } from "react-helmet-async";
const LogIn = () => {
  const [hide, setHide] = useState(false);
  const { handleSignIn, handleSignInWithPopup, handleSignInWithgithub } =
    useContext(authConfigContext);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSocialSignIn = (method) => {
    method()
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch(() => {
        // console.log(err);
      });
  };
  const onSubmit = (data, e) => {
    const { email, password } = data;
    handleSignIn(email, password)
      .then(() => {
        e.target.reset();
        navigate(location?.state || "/");
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
      <Helmet>
        <title>kState || Login</title>
      </Helmet>
      <div className="flex justify-center items-center w-full min-h-screen text-gray-800">
        <div className="rounded-3xl bg-white/50 backdrop:blur-xl w-[90%] lg:w-1/4 p-6 relative">
          <div
            className="inline-block p-2 text-white rounded-md absolute left-1/2 transform -translate-x-1/2 -translate-y-16"
            style={{
              background:
                "linear-gradient(180deg, rgba(31,61,96,1) 0%, rgba(250,182,62,0.6138830532212884) 100%)",
            }}
          >
            <img className="w-24" src={logo} alt="" />
          </div>
          <h1 className="text-xl font-semibold text-center my-8">LogIn</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div data-aos="flip-up" data-aos-duration="600">
              <input
                placeholder="Email..."
                {...register("email", { required: true })}
                className="w-full px-4 py-3 rounded border text-sm font-light"
              ></input>
            </div>
            {errors.email && (
              <span className="text-xs text-[#FF0000]">
                {errors.email.message}
              </span>
            )}
            <div data-aos="flip-up" data-aos-delay="300">
              <div className="flex bg-white h-12 focus-within:outline outline-2 items-center gap-1w-full px-4 py-3 rounded border text-sm font-light">
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 16,
                  })}
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
                  {errors.password.message}
                </span>
              )}
            </div>
            <div data-aos="flip-up" data-aos-delay="450">
              <button
                type="submit"
                className="block w-full py-2 bg-[#FAB63E] transition-colors text-[#112D4E] font-bold rounded mx-auto mt-8"
              >
                Log In
              </button>
            </div>
            <div data-aos="flip-up" data-aos-delay="500">
              <p className="text-sm w-[95%] mx-auto text-center mt-4 text-[#112D4E]">
                Don`t have an account?{" "}
                <Link className="text-blue-700 hover:underline" to={"/signUp"}>
                  Sign Up
                </Link>
              </p>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="550"
              className="mt-2 flex items-center gap-3"
            >
              <hr className="border-b-[1.5px] w-full bg-[#112D4E]" />
              <h1>Or</h1>
              <hr className="border-b-[1.5px] w-full bg-[#112D4E]" />
            </div>
            <div className="flex items-center w-4/4 mx-auto justify-around">
              <div data-aos="flip-up" data-aos-delay="600">
                <img
                  onClick={() => handleSocialSignIn(handleSignInWithPopup)}
                  className="w-40 h-16 px-3 py-1 rounded-md border border-[#112D4E] bg-slate-50 cursor-pointer"
                  src={google}
                  alt=""
                />
              </div>
              <div data-aos="flip-up" data-aos-delay="600">
                <img
                  onClick={() => handleSocialSignIn(handleSignInWithgithub)}
                  className="w-40 h-16 px-3 py-1 rounded-md border border-[#112D4E] bg-slate-50 cursor-pointer"
                  src={github}
                  alt=""
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

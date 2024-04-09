import { Link } from "react-router-dom";
import logo from "/resources/logo.png";
import google from "/resources/google.png";
import github from "/resources/github.png";
import loginBg from '/resources/loginBg.jpg'
const LogIn = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(${loginBg})`,
      }}
    >
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
          <form className="space-y-3">
            <input
              type="email"
              required
              placeholder="Email..."
              className="w-full px-4 py-3 rounded border text-sm font-light"
            ></input>
            <input
              type="password"
              required
              placeholder="Password..."
              className="w-full px-4 py-3 rounded border text-sm font-light"
            ></input>
            <button
              type="submit"
              className="block w-full py-2 bg-[#FAB63E] transition-colors text-[#112D4E] font-bold rounded mx-auto mt-8"
            >
              Log In
            </button>
            <p className="text-sm w-[95%] mx-auto text-center mt-4 text-[#112D4E]">
              Don`t have an account?{" "}
              <Link className="text-blue-700 hover:underline" to={"/signUp"}>
                Sign Up
              </Link>
            </p>
            <div className="mt-2 flex items-center gap-3">
              <hr className="border-b-[1.5px] w-full bg-[#112D4E]" />
              <h1>Or</h1>
              <hr className="border-b-[1.5px] w-full bg-[#112D4E]" />
            </div>
            <div className="flex items-center w-4/4 mx-auto justify-around">
              <img
                className="w-40 h-16 px-3 py-1 rounded-md border border-[#112D4E] bg-slate-50"
                src={google}
                alt=""
              />
              <img
                className="w-40 h-16 px-3 py-1 rounded-md border border-[#112D4E] bg-slate-50"
                src={github}
                alt=""
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

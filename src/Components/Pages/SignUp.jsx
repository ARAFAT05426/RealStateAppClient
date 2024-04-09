import { Link } from "react-router-dom";
import logo from "/resources/logo.png";
import loginBg from '/resources/loginBg.jpg'
const SignUp = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(${loginBg})`,
      }}
    >
      <div className="flex justify-center items-center w-full min-h-screen text-gray-800">
        <div className="rounded-3xl bg-white/50 backdrop:blur-xl w-[90%] lg:w-1/4 p-6 relative">
          <div className="inline-block p-2 text-white rounded-md absolute left-1/2 transform -translate-x-1/2 -translate-y-16" style={{
        background:
          "linear-gradient(180deg, rgba(31,61,96,1) 0%, rgba(250,182,62,0.6138830532212884) 100%)",
      }} >
            <img className="w-24" src={logo} alt="" />
          </div>
          <h1 className="text-xl font-semibold text-center my-8">
            SignUp
          </h1>
          <form className="space-y-3">
              <input
                type="text"
                required
                placeholder="Name..."
                className="w-full px-4 py-3 rounded border text-sm font-light"
              ></input>
              <input
                type="email"
                required
                placeholder="Email..."
                className="w-full px-4 py-3 rounded border text-sm font-light"
              ></input>
              <input
                type="password"
                required
                placeholder="Photo URL..."
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
              Sign Up
            </button>
            <p className="text-sm w-[95%] mx-auto text-center mt-2 text-[#112D4E]">
              Already have an account? <Link className="text-blue-700 hover:underline" to={'/logIn'}>Login</Link>
             </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

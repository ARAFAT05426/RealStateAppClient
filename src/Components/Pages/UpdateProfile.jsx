import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import authConfigContext from "../../Hooks/authConfigContext";
import { FaCircleUser } from "react-icons/fa6";
import { FiUploadCloud } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { PiSubtitlesDuotone } from "react-icons/pi";
import { FiLink } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const UpdateProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user, handleUpdateProfile } = useContext(authConfigContext);
  const onSubmit = (data, e) => {
    const { name, url } = data;
    handleUpdateProfile(name, url);
    e.target.reset();
  };
  const [active, setActive] = useState(0);
  return (
    <section className="mt-20 min-h-screen px-4 lg:px-28">
      <Helmet>
        <title>kState || Update-Profile</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row gap-5">
        <div
          data-aos="fade-right"
          data-aos-duration="300"
          className="w-full lg:w-3/12 border h-fit lg:min-h-screen px-3 py-3 border-b-0"
        >
          <img
            data-aos="flip-down"
            data-aos-delay="200"
            data-aos-duration="600"
            className="w-full"
            src={user?.photoURL}
            alt=""
          />
          <div className="mt-3">
            <div data-aos="flip-down" data-aos-delay="600">
              <h1
                onClick={() => setActive(0)}
                className={`px-3 cursor-pointer py-3 flex items-center gap-3 border border-b-0 ${
                  active === 0 && "border-r-[5px] border-r-[#FAB63E]"
                }`}
              >
                <FaCircleUser className="text-[#FAB63E] text-3xl" /> Profile
              </h1>
            </div>
            <div data-aos="flip-down" data-aos-delay="750">
              <h1
                onClick={() => setActive(1)}
                className={`px-3 cursor-pointer py-3 flex items-center gap-3 border ${
                  active === 1 && "border-r-[5px] border-r-[#FAB63E]"
                }`}
              >
                <FiUploadCloud className="text-[#FAB63E] text-3xl" /> Update
              </h1>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="300"
          className="px-5 py-3 border w-full"
        >
          {active === 0 ? (
            <div>
              <div
                data-aos="flip-down"
                data-aos-delay="200"
                data-aos-duration="600"
              >
                <h1 className="text-7xl font-semibold">Profile</h1>
              </div>
              <div className="flex flex-col mt-5 space-y-3">
                <div data-aos="flip-down"
                data-aos-delay="600" className="grid grid-cols-4 lg:grid-cols-8 items-center ">
                  <div className="flex items-center gap-2">
                    <PiSubtitlesDuotone className="text-[#FAB63E] text-3xl" />
                    Name
                  </div>
                  <div>:</div>
                  <div className="col-span-2 lg:col-span-5">
                    {user?.displayName}
                  </div>
                </div>
                <hr />
                <div data-aos="flip-down"
                data-aos-delay="750" className="grid grid-cols-4 lg:grid-cols-8 items-center">
                  <div className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead className="text-[#FAB63E] text-3xl" />
                    Email
                  </div>
                  <div>:</div>
                  <div className="col-span-2 lg:col-span-5">{user?.email}</div>
                </div>
                <hr />
                <div data-aos="flip-down"
                data-aos-delay="900" className="grid grid-cols-4 lg:grid-cols-8 items-center">
                  <div className="flex items-center gap-2">
                    <FiLink className="text-[#FAB63E] text-3xl" />
                    URL
                  </div>
                  <div>:</div>
                  <div className="col-span-2 lg:col-span-6 overflow-hidden text-xs lg:text-sm">
                    {user?.photoURL}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-7xl font-semibold">Update</h1>
              <div className="flex flex-col mt-5 ">
                <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-4 lg:grid-cols-8 items-center ">
                    <div className="flex items-center gap-2">
                      <PiSubtitlesDuotone className="text-[#FAB63E] text-3xl" />
                      Name
                    </div>
                    <div>:</div>
                    <div className="col-span-2 lg:col-span-5">
                      <div className="flex items-center w-full border px-3 rounded-md">
                        <input
                          className="outline-none py-3 px-1 grow text-sm"
                          type="text"
                          placeholder={user?.displayName}
                          {...register("name", { required: true })}
                        />
                        <FaEdit className="text-[#FAB63E] text-3xl" />
                      </div>
                      {errors.name && <span>{errors.name.message}</span>}
                    </div>
                  </div>
                  <hr />
                  <div className="grid grid-cols-4 lg:grid-cols-8 items-center ">
                    <div className="flex items-center gap-2">
                      <PiSubtitlesDuotone className="text-[#FAB63E] text-3xl" />
                      URL
                    </div>
                    <div>:</div>
                    <div className="col-span-2 lg:col-span-5">
                      <div className="flex items-center w-full border px-3 rounded-md">
                        <input
                          className="outline-none py-3 px-1 grow text-xs"
                          type="text"
                          placeholder={user?.photoURL}
                          {...register("url", { required: true })}
                        />
                        <FaEdit className="text-[#FAB63E] text-3xl" />
                      </div>
                    </div>
                  </div>
                  <div className="pt-3">
                    <button type="submit" className="cursor-pointer">
                      <h1 className="px-5 py-3 w-fit bg-[#FAB63E] font-semibold text-white">
                        Upload
                      </h1>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UpdateProfile;

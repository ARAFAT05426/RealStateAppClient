import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="text-5xl font-bold flex items-center min-h-screen justify-center">
      <Triangle visible={true} height="250" width="250" color="#FAB63E" ariaLabel="triangle-loading" wrapperStyle={{}} wrapperClass=""
      />
    </div>
  );
};

export default Loader;

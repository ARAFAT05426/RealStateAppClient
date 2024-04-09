import useData from "../../Hooks/useData";
import Estate from "./Estate";

const Estates = () => {
  const { data } = useData();
  return (
    <div className="mt-16">
      <h1 className="text-center text-5xl font-bold">Estate</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.map((item, idx) => (
          <Estate key={idx} data={item}></Estate>
        ))}
      </div>
    </div>
  );
};

export default Estates;

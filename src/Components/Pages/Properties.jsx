import useData from "../../Hooks/useData";
import EstateCard from "./EstateCard";
import { Helmet } from "react-helmet-async";

const Properties = () => {
  const data = useData();
  return (
    <div className="mt-16">
      <Helmet>
        <title>kState || Properties</title>
      </Helmet>
      <h1 className="text-center text-5xl font-bold">Estate</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.map((item, idx) => (
          <EstateCard key={idx} data={item}></EstateCard>
        ))}
      </div>
    </div>
  );
};

export default Properties;

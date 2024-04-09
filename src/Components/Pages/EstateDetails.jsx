import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const filtered = data.find(item => item?.id === id);
  const {image, estate_title, segment_name, description, price, status, area, location, facilities, view_property_button } = filtered
  return (
    <div className="text-7xl flex items-center justify-center min-h-screen">
      I am details
    </div>
  );
};

export default EstateDetails;

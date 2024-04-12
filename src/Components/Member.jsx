import PropTypes from 'prop-types';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Member = ({url, name, position}) => {
  return (
    <div data-aos="zoom-out" data-aos-duration="1000" className="flex flex-col items-center border py-5 rounded-md">
      <img className="w-96 h-96 p-3" src={url} alt="" />
      <div className="text-center mt-4">
        <h1 className="text-[#1F2937] text-4xl font-bold">{name}</h1>
        <p className="text-[#1F2937] text-lg font-semibold">{position}</p>
      </div>
    </div>
  );
};
Member.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string
}
export default Member;

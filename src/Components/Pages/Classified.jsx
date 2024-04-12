import { useContext } from "react";
import authConfigContext from "../../Hooks/authConfigContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Loader from "../Loader";
const Classified = ({ children }) => {
  const { user, loading } = useContext(authConfigContext);
  const location = useLocation();
  if (loading) {
    return <Loader></Loader>;
  }if (!user) {
    return (
      <Navigate to={"/logIn"} state={location?.pathname || "/"}></Navigate>
    );
  }return <div>{children}</div>;
};
Classified.propTypes = {
  children: PropTypes.node,
};
export default Classified;

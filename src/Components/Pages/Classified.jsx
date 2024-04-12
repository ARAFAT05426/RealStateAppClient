import { useContext } from "react";
import authConfigContext from "../../Hooks/authConfigContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import Loader from "../Loader";
const Classified = ({ children }) => {
  const { user, loading } = useContext(authConfigContext);
  if (loading) {
    return <Loader></Loader>;
  }else if (!user) {
    return <Navigate to={"/logIn"}></Navigate>;
  }
  return <div>{children}</div>;
};
Classified.propTypes = {
  children: PropTypes.node,
};
export default Classified;

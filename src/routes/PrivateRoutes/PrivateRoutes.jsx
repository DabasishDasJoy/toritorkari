import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loginModal, loading } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loader></Loader>;
  }
  if (user && user?.uid) {
    return children;
  }

  loginModal.current.checked = true;
  return <Navigate to={from} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;

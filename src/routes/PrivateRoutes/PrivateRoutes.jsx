import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loginModal, loading } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname;

  console.log(location);

  if (loading) {
    return <h1>Loaidng</h1>;
  }
  if (user && user.uid) {
    return children;
  } else {
    loginModal.current.checked = true;
    return <Navigate to={from} state={{ from: location }} replace></Navigate>;
  }
};

export default PrivateRoutes;

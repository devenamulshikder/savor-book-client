import { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "../components/shared/Loading";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = use(AuthContext);

  if (user) {
    return children;
  }
  if (loading) <Loading/>;

  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;

import { useContext } from "react";
import { AuthContext } from "./Auth";
import { Navigate ,useLocation} from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const location = useLocation()
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/" state={{path:location.pathname}} />;
  }else{
    return children;
  }
 
};

import { useContext, useState } from "react";
import { AuthContext } from "./Auth";
import { useNavigate, useLocation } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [userName, setUserName] = useState("");

  const location = useLocation();
  
  const redirectPath = location.state?.path || "/about";

  const handleLogin = () => {
    login(userName);
    navigate(redirectPath, { replace: true });
    // navigate("/about");
  };

  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="name"
      />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
};

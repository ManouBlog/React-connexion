import { AuthContext } from "./Auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const deconnexion = () => {
    logOut();
    navigate("/", { replace: true });
  };
  const userInfo = localStorage.getItem("user");
  return (
    <div>
      <h1>About</h1>
      <p>Hey mon nom est {userInfo}</p>
      <div>
        <button onClick={deconnexion} style={{ background: "red" }}>
          Deconnexion
        </button>
      </div>
    </div>
  );
};

export default About;

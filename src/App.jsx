import "./App.css";
import { Outlet, NavLink } from "react-router-dom";
import {AuthContext} from "./components/Auth"
import { useContext} from "react";

export const App = () => {
  const {user} = useContext(AuthContext);

  return (
    
      <div className="App">
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
              <div className="sr-only" aria-live="polite"></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to={`about`}>About</NavLink>
              </li>
              {/* <li>
              <NavLink to={`contact`}>Contact</NavLink>
            </li> */}
              <li>
                <NavLink to={`profile`}>Profile</NavLink>
              </li>
              {!user && <li>
              <NavLink to={`login`}>Login</NavLink>
            </li> }
            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </div>
  
  );
};

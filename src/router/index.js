import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";

import About from "../components/About";

import { Login } from "../components/Login";
import User from "../components/User";
import UserDetail from "../components/UserDetail";
import { Profile } from "../components/Profile";
import { RequireAuth } from "../components/RequireAuth";
const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Formulaire />,
  //     errorElement: <ErrorPage />,
  //   },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "user",
    element: <User />,
  },

  {
    path: "/user/:id",
    element: <UserDetail />,
  },
  {
    path: "",
    element: (
      <RequireAuth>
        <App />
      </RequireAuth>
    ),
    children: [
      //   {
      //     path: "contact",
      //     element: <Contact />,
      //   },
      {
        path: "about",
        element: (
          <RequireAuth>
            <About />
          </RequireAuth>
        ),
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;

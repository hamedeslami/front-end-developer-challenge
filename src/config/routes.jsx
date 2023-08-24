import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Singup from "../pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Landing />
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div>
        <Singup />
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <h1>404</h1>
      </div>
    ),
  },
]);

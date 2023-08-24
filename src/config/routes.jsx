import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import SignUp from "../pages/Signup";

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
        <SignUp />
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

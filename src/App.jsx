import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import HomeLayout from "./pages/HomeLayout";
import Home from "./pages/Home";

import { action as loginAction } from "./pages/LoginSignup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <LoginSignup />,
        action: loginAction,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

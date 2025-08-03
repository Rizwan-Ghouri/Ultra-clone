import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Product from "../../pages/Product";
import Services from "../../pages/Services";
import AppLayout from "../../components/AppLayout/AppLayout";
import Signup from "../../pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/Ultra-clone",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

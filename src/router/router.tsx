import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/components/Layout/Layout";
import { Home } from "@/pages/home/Home";
import { Login } from "@/pages/login/Login";
import { Product } from "@/pages/product/Product";
import { Register } from "@/pages/register/Register";

import { ProtectedRouter } from "./protectedRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRouter>
        <Layout />
      </ProtectedRouter>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

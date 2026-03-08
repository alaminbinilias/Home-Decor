import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import { HydratedRouter } from "react-router/dom";
import axios from "axios";
import AllProducts from "../Component/AllProducts/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:'true',
        Component:Home,
      },
      {
        path:'/products',
        Component:AllProducts
      }
    ],
  },
]);

export default router;

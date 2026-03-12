import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import { HydratedRouter } from "react-router/dom";
import AllProducts from "../Component/AllProducts/AllProducts";
import ProductDetails from "../Component/ProductDetails/ProductDetails";
import WishList from "../Pages/WishList";

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
      },
      {
        path:'/product/details/:id',
        Component:ProductDetails
      },
      {
        path:'/wishlist',
        Component:WishList
      }
    ],
  },
]);

export default router;

import React from "react";
import Navber from "../Component/NavSection/Navber";
import Footer from "../Component/FooterSection/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navber></Navber>
      <div className="flex-1 px-3 mb-10 lg:mx-10 lg:px-10 mt-19 lg:mb-20">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

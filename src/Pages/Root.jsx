import React from "react";
import Navber from "../Component/NavSection/Navber";
import Footer from "../Component/FooterSection/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navber></Navber>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

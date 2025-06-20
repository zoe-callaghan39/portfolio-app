import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import StarsBackground from "../StarsBackground/StarsBackground";
import "./Layout.css";

const Layout = () => (
  <>
    <StarsBackground />
    <NavBar />

    <div className="page">
      <SideBar />

      <main className="page-content">
        <Outlet />
      </main>
    </div>
  </>
);

export default Layout;

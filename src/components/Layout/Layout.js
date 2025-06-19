import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import StarsBackground from "../StarsBackground/StarsBackground";
import styles from "./Layout.module.css";

const Layout = () => (
  <>
    <StarsBackground />
    <NavBar />
    <SideBar />

    {/* Push main content to the right so the sidebar doesn't overlap */}
    <main className={styles.content}>
      <Outlet />
    </main>
  </>
);

export default Layout;

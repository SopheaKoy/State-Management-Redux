import React from "react";
import NavbarComponent from "../header/NavbarComponent";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      {/* Outlet using for render data  */}
      <Outlet />
    </>
  );
}

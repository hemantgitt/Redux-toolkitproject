import { Outlet } from "react-router-dom";
import React from "react";
import NavbarPanel from "./NavbarPanel";
import { Provider } from "react-redux";
import store from "../Store/store";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavbarPanel />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;

import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Contact from './Contact';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;

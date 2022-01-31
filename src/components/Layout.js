import React from "react";
import AppSection from "./AppSection";
import Header from "./Header";
import InfoSection from "./InfoSection";
import ServicesSection from "./ServicesSection";

const Layout = () => {
  return (
    <div className="full-layout">
      <Header />
      <AppSection/>
      <InfoSection/>
      <ServicesSection/>
    </div>
  );
};

export default Layout;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  classBody,
  classTitle,
  classIcons,
  children,
}) {
  return (
    <div className={classBody}>
      <Header classTitle={classTitle} classIcons={classIcons} />
      {children}
      <Footer />
    </div>
  );
}

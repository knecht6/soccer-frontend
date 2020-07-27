import React from "react";
import "../assets/css/layout.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  classBody,
  classTitle,
  classIcons,
  children,
  url,
  localTeam,
  visitTeam,
  title,
  powered
}) {
  return (
    <div className={classBody}>
      <Header
        classTitle={classTitle}
        classIcons={classIcons}
        url={url}
        localTeam={localTeam}
        visitTeam={visitTeam}
        title={title}
      />
      {children}
      <Footer powered={powered} />
    </div>
  );
}

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
  powered,
  Lenguaje,
  handleLenguaje,
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
        Lenguaje={Lenguaje}
        handleLenguaje={handleLenguaje}
      />
      {children}
      <Footer powered={powered} />
    </div>
  );
}

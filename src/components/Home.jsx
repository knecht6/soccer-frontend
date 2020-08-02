import React, { useEffect } from "react";
import "../assets/css/font-awesome.min.css";
import "../assets/css/style.css";
import "../assets/css/dark.css";
import Layout from "./Layout";
import { Link } from "react-router-dom";

export default function Home({
  url,
  handleUrl,
  words,
  title,
  powered,
  Lenguaje,
  handleLenguaje
}) {
  useEffect(() => {
    handleUrl(window.location.href, null, null);
  });
  return (
    <Layout
      classBody="body-dark"
      classTitle="title-dark"
      classIcons="social-icons-dark"
      url={url}
      handleUrl={handleUrl}
      title={title}
      powered={powered}
      Lenguaje={Lenguaje}
      handleLenguaje={handleLenguaje}
    >
      <div className="outer">
        <div className="middle">
          <div className="inner">
            <main>
              <div>
                <h1 className="gradient">
                  <span>{title[0]}</span> {` ${title[1]}`}
                </h1>
              </div>
              <div>
                <Link
                  to={`${Lenguaje}/select`}
                  className="btn-play"
                  style={{ textDecoration: "none" }}
                >
                  {words.playButton}
                </Link>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
}

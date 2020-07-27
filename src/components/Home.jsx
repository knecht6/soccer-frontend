import React, { useEffect } from "react";
import "../assets/css/font-awesome.min.css";
import "../assets/css/style.css";
import "../assets/css/dark.css";
import Layout from "./Layout";
import { Link } from "react-router-dom";

export default function Home({ url, handleUrl, words, title, powered }) {
  useEffect(() => {
    handleUrl(window.location.href, null, null);
  });
  return (
    <Layout
      classBody="body-dark"
      classTitle="white"
      classIcons="social-icons"
      url={url}
      handleUrl={handleUrl}
      title={title}
      powered={powered}
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
                  to="/select"
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

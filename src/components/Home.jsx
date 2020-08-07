import React, { useEffect } from "react";
import "../assets/css/font-awesome.min.css";
import "../assets/css/style.css";
import "../assets/css/dark.css";
import { Link, useParams } from "react-router-dom";

export default function Home({
  handleUrl,
  words,
  title,
  Lenguaje,
  changeMode,
  handleLenguajeReceived,
}) {
  const { lenguaje } = useParams();
  useEffect(() => {
    handleLenguajeReceived(lenguaje);
  }, [handleLenguajeReceived, lenguaje]);
  useEffect(() => {
    handleUrl(window.location.href, null, null);
    changeMode("dark");
  }, [handleUrl, changeMode]);
  return (
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
  );
}

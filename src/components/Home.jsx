import React from "react";
import "../assets/css/font-awesome.min.css";
import "../assets/css/style.css";
import "../assets/css/dark.css";
import Layout from "./Layout";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Layout classBody="body-dark" classTitle="white" classIcons="social-icons">
      <div className="outer">
        <div className="middle">
          <div className="inner">
            <main>
              <div>
                <h1 className="gradient">
                  <span>Soccer</span> predictions
                </h1>
              </div>
              <div>
                <Link
                  to="/select"
                  className="btn-play"
                  style={{ textDecoration: "none" }}
                >
                  Play
                </Link>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
}

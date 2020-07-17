import React from "react";
import { Link } from "react-router-dom";

export default function Header({ classTitle, classIcons }) {
  return (
    <header>
      <div className="nav-holder">
        <div className="menu-tittle">
          <Link to="/">
            <h1 className={classTitle}>Soccer predictions</h1>
          </Link>
        </div>
        <div className={classIcons}>
          <ul>
            <li>
              <Link to="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";

export default function Header({
  classTitle,
  classIcons,
  url,
  localTeam,
  visitTeam,
  title,
}) {
  let quote = "";
  let titleShare = "";
  let via = "";
  let hashtags = [];
  if (localTeam && visitTeam) {
    quote = `${localTeam.team_name} ${localTeam.season_name} vs ${visitTeam.team_name} ${visitTeam.season_name} - Powered by databot.io`;
    titleShare = `${localTeam.team_name} ${localTeam.season_name} vs ${visitTeam.team_name} ${visitTeam.season_name} - Powered by databot.io`;
    via = "databotio";
    hashtags.push(
      `${localTeam.team_name.replace(" ", "_")}_${localTeam.season_name.replace(
        "/",
        "_"
      )}`
    );
    hashtags.push(
      `${visitTeam.team_name.replace(" ", "_")}_${visitTeam.season_name.replace(
        "/",
        "_"
      )}`
    );
  } else {
    quote = "Soccer Analysis - Powered by Databot.io";
    titleShare = "Soccer Analysis";
    via = "databotio";
    hashtags.push("Soccer_Analysis");
    hashtags.push("SoccerPrediction");
  }
  return (
    <header>
      <div className="nav-holder">
        <div className="menu-tittle">
          <Link to="/">
            <h1 className={classTitle}>{`${title[0]} ${title[1]}`}</h1>
          </Link>
        </div>
        <div className={classIcons}>
          <ul>
            <li>
              <FacebookShareButton url={url} quote={quote}>
                <Link to="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
              </FacebookShareButton>
            </li>
            <li>
              <TwitterShareButton
                url={url}
                title={titleShare}
                via={via}
                hashtags={hashtags}
              >
                <Link to="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
              </TwitterShareButton>
            </li>
            <li>
              <WhatsappShareButton url={url}>
                <Link to="#">
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                </Link>
              </WhatsappShareButton>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

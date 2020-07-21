import React, { useEffect, useState } from "react";
import "../assets/css/select.css";
import "../assets/css/grid.css";
import "../assets/css/font-awesome.min.css";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import ListLeagues from "./ListLeagues";
import League from "./League";
import ListTeams from "./ListTeams";
import Team from "./Team";
import ListYears from "./ListYears";
import Year from "./Year";
import PremierLeague from "../assets/images/premier-league.svg";
import SerieA from "../assets/images/serie-a.svg";
import LaLiga from "../assets/images/la-liga.svg";
import Bundesliga from "../assets/images/bundesliga.svg";
import Ligue1 from "../assets/images/ligue-1.svg";
import LoadCircle from "./LoadCircle";
import TeamSelected from "./TeamSelected";

const arrayLogos = [
  {
    id: 1,
    src: PremierLeague,
  },
  {
    id: 2,
    src: SerieA,
  },
  {
    id: 3,
    src: LaLiga,
  },
  {
    id: 4,
    src: Bundesliga,
  },
  {
    id: 5,
    src: Ligue1,
  },
];

export default function Select() {
  const [leagues, setLeagues] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [localTeam, setLocalTeam] = useState(null);
  const [visitTeam, setVisitTeam] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleTeam = (team, season) => {
    if (localTeam === null) {
      setLocalTeam({ team, season });
    } else if (visitTeam === null) {
      setVisitTeam({ team, season });
    }
  };
  const resetLocal = () => {
    setLocalTeam(null);
  };
  const resetVisit = () => {
    setVisitTeam(null);
  };
  const validate = (e) => {
    if (!(localTeam && visitTeam)) {
      e.preventDefault();
    }
  };
  const handleLeague = (e, leagueId, name) => {
    let league = leagues.find((league) => league.id === leagueId);
    if (!league.teams) {
      fetch(
        `${
          process.env.REACT_APP_API_URL
        }/api/list/statistic/${encodeURIComponent(name)}`
      )
        .then((res) => res.json())
        .then(
          (res) => {
            league.teams = res;
            if (league) {
              const newLeague = leagues.map((element) => {
                if (element.id === league.id) {
                  return league;
                } else {
                  return element;
                }
              });
              setLeagues(newLeague);
            }
          },
          (error) => {
            setError(error);
          }
        )
        .catch((error) => {
          setError(error);
        });
    }
  };
  useEffect(() => {
    (() => {
      setLoading(true);
      fetch(`${process.env.REACT_APP_API_URL}/api/list/league`)
        .then((res) => res.json())
        .then(
          (res) => {
            setLeagues(res);
            setLoading(false);
          },
          (error) => {
            setError(error);
          }
        )
        .catch((error) => {
          setError(error);
        });
    })();
    (() => {
      fetch(`${process.env.REACT_APP_API_URL}/api/list/season`)
        .then((res) => res.json())
        .then(
          (res) => {
            setSeasons(res);
          },
          (error) => {
            setError(error);
          }
        )
        .catch((error) => {
          setError(error);
        });
    })();
  }, []);
  if (loading) {
    return (
      <Layout
        classBody="body-light"
        classTitle="title"
        classIcons="social-icons-light"
      >
        <main style={{ paddingTop: 100 }}>
          <LoadCircle />
        </main>
      </Layout>
    );
  } else {
    if (error) {
      return (
        <Layout
          classBody="body-light"
          classTitle="title"
          classIcons="social-icons-light"
        >
          <main style={{ paddingTop: 100 }}>
            <h1>A error to ocurred</h1>
          </main>
        </Layout>
      );
    } else {
      return (
        <Layout
          classBody="body-light"
          classTitle="title"
          classIcons="social-icons-light"
        >
          <main style={{ paddingTop: 100 }}>
            <ListLeagues>
              {leagues.map((league) => (
                <League
                  key={league.id}
                  id={league.id}
                  src={arrayLogos.find((logo) => league.id === logo.id).src}
                  name={league.name}
                  onHover={handleLeague}
                >
                  {league.teams ? (
                    <ListTeams>
                      {league.teams.map((team) => (
                        <Team
                          key={team.id}
                          name={team.team_name}
                          src={team.img_team}
                        >
                          <ListYears>
                            {seasons.map((season, index) => (
                              <Year
                                key={index}
                                name={season.name}
                                team={team}
                                handleTeam={handleTeam}
                              />
                            ))}
                          </ListYears>
                        </Team>
                      ))}
                    </ListTeams>
                  ) : (
                    <ListTeams>
                      <LoadCircle />
                    </ListTeams>
                  )}
                </League>
              ))}
            </ListLeagues>
            <div className="container">
              <div id="selected-teams" className="row">
                <div className="col-4">
                  <TeamSelected
                    team={localTeam}
                    label="Local Team"
                    reset={resetLocal}
                  />
                </div>
                <div className="col-4">
                  <Link
                    className="btn-lets-play"
                    style={{ textDecoration: "none" }}
                    onClick={validate}
                    to={
                      localTeam && visitTeam
                        ? `/${encodeURIComponent(
                            localTeam.team.team_name
                          )}/${encodeURIComponent(
                            localTeam.season
                          )}-vs-/${encodeURIComponent(
                            visitTeam.team.team_name
                          )}/${encodeURIComponent(visitTeam.season)}`
                        : "/"
                    }
                  >
                    Let's play
                  </Link>
                </div>
                <div className="col-4">
                  <TeamSelected
                    team={visitTeam}
                    label="Visit Team"
                    reset={resetVisit}
                  />
                </div>
              </div>
            </div>
          </main>
        </Layout>
      );
    }
  }
}

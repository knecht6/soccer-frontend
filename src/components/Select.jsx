import React, { useEffect, useState } from "react";
import Layout from "./Layout";
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLeague = (e) => {
    let leagueId = parseInt(e.currentTarget.id);
    let league = leagues.find((league) => league.id === leagueId);
    if (!league.teams) {
      fetch(
        `${
          process.env.REACT_APP_API_URL
        }/api/list/statistic/${encodeURIComponent(
          e.currentTarget.getAttribute("data-name")
        )}`
      )
        .then((res) => res.json())
        .then(
          (res) => {
            league.teams = res;
            if (league) {
              const newLeague = leagues.map((element) => {
                if (element.id === league.id) {
                  console.log("element", element);
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
      <Component>
        <LoadCircle />
      </Component>
    );
  } else {
    if (error) {
      return (
        <Component>
          <h1>A error to ocurred</h1>
        </Component>
      );
    } else {
      return (
        <Component>
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
        </Component>
      );
    }
  }
}
const Component = ({ children }) => (
  <Layout
    classBody="body-light"
    classTitle="title"
    classIcons="social-icons-light"
  >
    <div className="container">{children}</div>
  </Layout>
);

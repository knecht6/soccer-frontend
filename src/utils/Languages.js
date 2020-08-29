const Lenguajes = {
  en: {
    title: ["Soccer", "predictions"],
    home: {
      playButton: "Play",
    },
    select: {
      playButton: "Let's play",
      localLegend: {
        name: "Local Team",
        season: "Season",
      },
      visitLegend: {
        name: "Visiting team",
        season: "Season",
      },
    },
    match: {
      result: {
        win: "winner",
        tie: "Tie",
      },
      playButton: ["Play", "Again?"],
      wantToKnowMore: `The victory percentages of one team over another are calculated based
      on their classification in the selected season and locations, thus
      giving a higher probability margin to the home team.`
    },
    error: {
      notFound: "",
    },
    powered: "Powered by",
  },
  es: {
    title: ["Predicciones", "Futbolísticas"],
    home: {
      playButton: "Iniciar",
    },
    select: {
      playButton: "Jugar",
      localLegend: {
        name: "Equipo Local",
        season: "Temporada",
      },
      visitLegend: {
        name: "Equipo Visita",
        season: "Temporada",
      },
    },
    match: {
      result: {
        win: "Ganador",
        tie: "Empate",
      },
      playButton: ["Jugar", "de nuevo"],
      wantToKnowMore: `Los porcentajes de victoria de un equipo respecto a otro son calculados 
      en base a su clasificación en la temporada seleccionada y localidades con lo cual se le 
      da un margen de probabilidad mas alto al equipo local.`
    },
    error: {
      notFound: "",
    },
    powered: "Desarrolado por",
  },
};

export { Lenguajes };
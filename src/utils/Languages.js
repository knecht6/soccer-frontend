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
      wantToKnowMore: {
        title: "Want to Know More?",
        legend: `The victory percentages of one team over another are calculated based
        on their classification in the selected season and locations, thus
        giving a higher probability margin to the home team.`,
        closeButton: "Close"
      },
      donation: {
        title: "Donate!",
        legend: [
          `We built this tool as much for our enjoyment, as for yours. We've put it together in between projects and on the weekends during the great COVID-19 quarantine of 2020. It's been a labor of love to this point, and we're so grateful you stopped by to enjoy it. We also know it's far from perfect. We'd love to continue investing our time, and energy into this project, and greatly expand the tools that are available for your enjoyment.`,
          `For instance - we'd love to add a round robin component so you can grab multiple teams and play them through a season series. We'd love to include individual player data and allow you to pit your favorite kids against one another for the ultimate position ranking list. We'd love to keep honing the current scoring algorithm and make this tool even more accurate with additional data and insight....and most of all we'd love to keep this page free of ads. We think there is something special about a a data visualization that isn't encumbered by banners screaming at you to buy those shoes that have been following you around the internet for the last ten months.`,
          `All of that to say, even a small $5 donation today will enable us to continue the conversation about how the we can make this project great. If you’ve had fun, please consider making a donation – and sharing the site with all your friends.          `,
        ],
        closeButton: "Close"
      }
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
      wantToKnowMore: {
        title: "¿Más información?",
        legend: `Los porcentajes de victoria de un equipo respecto a otro son calculados 
        en base a su clasificación en la temporada seleccionada y localidades con lo cual se le 
        da un margen de probabilidad mas alto al equipo local.`,
        closeButton: "Cerrar"
      },
      donation: {
        title: "Donar!",
        legend: [
          `Construimos esta herramienta tanto para nuestro disfrute como para el tuyo. Lo hemos reunido entre proyectos y los fines de semana durante la gran cuarentena de COVID-19 de 2020. Ha sido un trabajo de amor hasta este punto, y estamos muy agradecidos de que haya venido a disfrutarlo. También sabemos que está lejos de ser perfecto. Nos encantaría seguir invirtiendo nuestro tiempo y energía en este proyecto y ampliar enormemente las herramientas disponibles para su disfrute.`,
          `Por ejemplo, nos encantaría agregar un componente de todos contra todos para que pueda elegir varios equipos y jugarlos a lo largo de una serie de temporada. Nos encantaría incluir datos de jugadores individuales y permitirle enfrentar a sus hijos favoritos entre sí para obtener la lista de clasificación de posición definitiva. Nos encantaría seguir perfeccionando el algoritmo de puntuación actual y hacer que esta herramienta sea aún más precisa con información, datos adicionales y sobre todo, nos encantaría mantener esta página libre de anuncios. Creemos que hay algo especial en una visualización de datos que no se vea obstaculizada por pancartas que le gritan que compre esos zapatos que lo han estado siguiendo por Internet durante los últimos diez meses.`,
          `Todo eso para decir, incluso una pequeña donación de $ 5 hoy nos permitirá continuar la conversación sobre cómo podemos hacer que este proyecto sea grandioso. Si se ha divertido, considere hacer una donación y compartir el sitio con todos sus amigos.`,
        ],
        closeButton: "Cerrar"
      }
    },
    error: {
      notFound: "",
    },
    powered: "Desarrolado por",
  },
};

export { Lenguajes };
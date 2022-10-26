function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      pregunta: "¿Quienes son los actores armados de este conflicto?",
      ayuda: "Algunos son guerrillas y paramilitares",
      respuesta: "FARC, ELN, M-19, Paramilitares, Estado, Narcotraficantes.",
      distractores: ["FARC, Álvaro Uribe, Juan Manuel Santos, Pastrana, ELN.", "URSS, Nazis, Británicos, Franceses.", "Pablo Escobar, Hermanos Orejuela, Gacha, Hermanos Ochoa."],
    },
    {
      pregunta: "¿El narcotráfico en Colombia es?",
      respuesta: "Negocio de drogas ilícitas",
      distractores: ["Negocio de drogas lícitas", "Negocio de drogas legales", "Ninguna de las repuestas es correcta"],
    },
    {
      pregunta: "Es uno de los sucesos causantes de este conflicto",
      ayuda: "Fue cuando asesinaron a un candidato a la presidencia",
      respuesta: "El bogotazo",
      distractores: ["La Batalla de Palacé", "Revolución de los Comuneros", "La debilidad del estado"],
    },
    
    {
      pregunta: "El Frente Nacional fue un pacto político entre:",
      ayuda: "Fue entre partidos politicos",
      respuesta: "Los partidos Liberal y Conservador",
      distractores: ["Los partidos Conservador y el Centro democrático", "El General Gustavo Rojas Pinilla y Jorge Eliécer Gaitán", "Alberto Lleras Camargo y Misael Pastrana Borrero"],
    },
    {
      pregunta: "¿En qué año se firmaron lo acuerdos de paz con las FARC?",
      respuesta: "2016",
      distractores: ["2006", "2010", "2015"],
    },
    {
      pregunta: "¿Qué significan las siglas (AUC)?",
      respuesta: "Autodefensas Unidas de Colombia",
      distractores: ["Autorización Única de Colombia", "Armamento Unido de Colombia", "Autoridades Unidas de Colombia"],
    },
    {
      pregunta: "¿En qué año se crearon las Fuerzas Armadas Revolucionarias De Colombia?",
      respuesta: "1964",
      distractores: ["1974", "1965", "1975"],
    },
    {
      pregunta: "La época de la violencia fue una suma de muchas y variadas violencias, estas violencias fueron:",
      respuesta: "Violencias políticas, sociales, económicas y religiosas",
      distractores: ["Violencias políticas y sociales", "Solo violencias económicas", "Solo violencias religiosas"],
    },
    {
      pregunta: "La principal consecuencia de este conflicto es: ",
      ayuda: "Tiene que ver con los derechos fundamentales",
      respuesta: "El abuso a los derechos humanos y violaciones al derecho internacional humanitario.",
      distractores: ["Afectaciones políticas", "Abusos de los derechos económicos", "Afectaciones en los derechos sociales"],
    },
    {
      pregunta: "Una de las consecuencias del conflicto armado es",
      respuesta: "La muerte de miles de niños, niñas y adolescentes",
      distractores: ["El aumento de la economia", "Mejoramiento del medio ambiente", "El buen mantenimiento del país"],
    },
  ];
  
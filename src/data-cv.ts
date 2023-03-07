import html5Img from "./images/html5.png";
import css3Img from "./images/css3.png";
import reactImg from "./images/react.png";
import javascriptImg from "./images/javascript.png";
import gitImg from "./images/git.png";
import githubImg from "./images/github.png";
import typescriptImg from "./images/typescript.png";
import mvConstructoraImg from "./images/mv-constructora-img.jpg";
import aerolabImg from "./images/aerolab-img.jpg";
import mlImg from "./images/ml-img.jpg";

const dataResume = {
  knowledge: [
    "Desarrollo de aplicaciones web con HTML5, CSS3, JavaScript y TypeScript, preferentemente con el uso de la librería React JS",
    "Librerías: styled-components, react-router, react-intersection-observer, react-responsive, Chakra UI.",
    "Experiencia en maquetación perfect pixel.",
    "Manejo de estados con Context",
    "Experiencia en consumo de API Rest.",
    "Manejo de Git y GitHub.",
  ],
  skills: [
    ["HTML5", html5Img],
    ["CSS3", css3Img],
    ["JavaScript", javascriptImg],
    ["TypeScript", typescriptImg],
    ["ReactJS", reactImg],
    ["Git", gitImg],
    ["GitHub", githubImg],
  ],
  proyects: [
    {
      name: "Clon de Mercado Libre",
      img: mlImg,
      deploy: "https://nicofaienza.github.io/ml-clon",
    },
    {
      name: "MV Contstuctora",
      img: mvConstructoraImg,
      deploy: "https://nicofaienza.github.io/mv-constructora/",
    },

    {
      name: "Aerolab Challenge",
      img: aerolabImg,
      deploy: "https://nicofaienza.github.io/aerolab-challenge/",
    },
  ],
};

export default dataResume;

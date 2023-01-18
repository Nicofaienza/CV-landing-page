import html5Img from "./images/html5.png";
import css3Img from "./images/css3.png";
import reactImg from "./images/react.png";
import javascriptImg from "./images/javascript.png";
import gitImg from "./images/git.png";
import githubImg from "./images/github.png";
import typescriptImg from "./images/typescript.png";
import mvConstructoraImg from "./images/mv-constructora-img.jpg";
import aerolabImg from "./images/aerolab-img.jpg";
import portfolioImg from "./images/portfolio-img.jpg";

const dataResume = {
  knowledge: [
    "Desarrollo de aplicaciones web con 𝗛𝗧𝗠𝗟𝟱, 𝗖𝗦𝗦𝟯 y 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 vanilla o preferentemente con el uso de su librería 𝗥𝗲𝗮𝗰𝘁 𝗝𝗦.",
    "Librerías: styled-components, react-router, react-intersection-observer.",
    "Experiencia en maquetación perfect pixel.",
    "Experiencia en consumo de API Rest.",
    "Manejo de 𝗚𝗶𝘁 y 𝗚𝗶𝘁𝗛𝘂𝗯.",
  ],
  skills: [
    ["HTML5", html5Img],
    ["CSS3", css3Img],
    ["JavaScript", javascriptImg],
    ["ReactJS", reactImg],
    ["Git", gitImg],
    ["GitHub", githubImg],
    ["TypeScript", typescriptImg],
  ],
  proyects: [
    {
      name: "MV Contstuctora",
      img: mvConstructoraImg,
      deploy: "https://nicofaienza.github.io/mv-constructora/",
    },
    {
      name: "Portfolio personal",
      img: portfolioImg,
      deploy: "https://nicofaienza.github.io/portfolio/",
    },
    {
      name: "Aerolab Challenge",
      img: aerolabImg,
      deploy: "https://nicofaienza.github.io/aerolab-challenge/",
    },
  ],
};

export default dataResume;

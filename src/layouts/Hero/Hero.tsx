import React from "react";
import {
  HeroWrapper,
  HeroTitle,
  HeroText,
  HeroButton,
  HeroImgContainer,
  HeroHeader,
} from "./HeroElements";
import heroImgMobile from "../../images/hero-img-mobile.png";
import heroImg from "../../images/hero-img.png";
import gitHubImg from "../../images/github.png";
import linkedinImg from "../../images/linkedin.png";
import logoImg from "../../images/logo.png";
import arrow from "../../images/arrow-icon.png";

export default function Hero(): JSX.Element {
  let screenWidth = window.screen.width;
  console.log("width : ", screenWidth);

  return (
    <HeroWrapper>
      <HeroHeader>
        <span>
          <img src={logoImg} />
          Nicolás Faienza
        </span>
        <div id="hero__links-container">
          <a
            className="hero__logo-container"
            href="https://github.com/Nicofaienza"
            target="_blank"
          >
            <img className="logo-links" src={gitHubImg} />
          </a>
          <a
            className="hero__logo-container"
            href="https://www.linkedin.com/in/nicolas-faienza/"
            target="_blank"
          >
            <img className="logo-links" src={linkedinImg} />
          </a>
        </div>
      </HeroHeader>
      <div id="hero__container">
        <div id="hero__container__text">
          <HeroTitle>👋 Hola, soy Desarrollador Frontend.</HeroTitle>
          <HeroText>
            Estudié de manera autodidacta el desarrollo de aplicaciones del lado
            del frontend con <strong>HTML5</strong>, <strong>CSS3</strong>,
            <strong>JavaScript</strong>, <strong>TypeScript</strong> y{" "}
            <strong>React JS</strong>.
            <br />
            <br />
            Estoy en búsqueda de mi primer trabajo como desarrollador con el fin
            de mejorar mis habilidades y adquirir nuevas experiencias.
          </HeroText>
          <HeroButton href="#contact">
            <span>Contactame</span>
            <img src={arrow} />
          </HeroButton>
        </div>
        <HeroImgContainer>
          <img src={heroImg} alt="" />
        </HeroImgContainer>
      </div>
    </HeroWrapper>
  );
}

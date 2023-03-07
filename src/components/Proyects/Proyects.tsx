import { useState } from "react";
import { HeroButton } from "../../layouts/Hero/HeroElements";
import {
  ProyectsButton,
  ProyectsCard,
  ProyectsCardImgCont,
  ProyectsCardName,
  ProyectsContainer,
  ProyectsTitle,
  ProyectsWrapper,
} from "./ProyectsElements";
import { Proyect } from "./types";

interface Props {
  data: Array<Proyect>;
}

export default function Proyects(props: Props): JSX.Element {
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);

  const proyects = props.data;

  return (
    <ProyectsWrapper>
      <ProyectsTitle>Proyectos</ProyectsTitle>
      <ProyectsContainer>
        <ProyectsCard>
          <ProyectsCardImgCont
            onMouseEnter={() => {
              setIsHover1(true);
            }}
            onMouseLeave={() => {
              setIsHover1(false);
            }}
          >
            <img src={proyects[0].img} alt="" loading="lazy" />
            <HeroButton
              id={proyects[0].img}
              className="proyect-btn"
              target="_blank"
              href={proyects[0].deploy}
              style={{ display: isHover1 ? "flex" : "none" }}
            >
              <span>Ver proyecto.</span>
            </HeroButton>
          </ProyectsCardImgCont>
          <ProyectsCardName>{proyects[0].name}</ProyectsCardName>
        </ProyectsCard>
        <ProyectsCard>
          <ProyectsCardImgCont
            onMouseEnter={() => {
              setIsHover2(true);
            }}
            onMouseLeave={() => {
              setIsHover2(false);
            }}
          >
            <img src={proyects[1].img} alt="" loading="lazy" />
            <HeroButton
              id={proyects[1].img}
              className="proyect-btn"
              target="_blank"
              style={{ display: isHover2 ? "flex" : "none" }}
              href={proyects[1].deploy}
            >
              <span>Ver proyecto.</span>
            </HeroButton>
          </ProyectsCardImgCont>
          <ProyectsCardName>{proyects[1].name}</ProyectsCardName>
        </ProyectsCard>

        <ProyectsCard>
          <ProyectsCardImgCont
            onMouseEnter={() => {
              setIsHover3(true);
            }}
            onMouseLeave={() => {
              setIsHover3(false);
            }}
          >
            <img src={proyects[2].img} alt="" loading="lazy" />
            <HeroButton
              id={proyects[2].img}
              className="proyect-btn"
              href={proyects[2].deploy}
              target="_blank"
              style={{ display: isHover3 ? "flex" : "none" }}
            >
              <span>Ver proyecto.</span>
            </HeroButton>
          </ProyectsCardImgCont>
          <ProyectsCardName>{proyects[2].name}</ProyectsCardName>
        </ProyectsCard>
      </ProyectsContainer>
      <HeroButton
        href="https://github.com/Nicofaienza?tab=repositories"
        target={"_blank"}
        style={{ alignSelf: "center", marginTop: "60px" }}
      >
        <span>Ver más</span>
      </HeroButton>
    </ProyectsWrapper>
  );
}

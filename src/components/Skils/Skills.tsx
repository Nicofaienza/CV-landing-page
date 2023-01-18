import React from "react";
import { SkillsContainer, SkillsIconLi, SkillsTitle } from "./SkillsElements";

interface Props {
  data: Array<Array<string>>;
}

export default function Skills(props: Props): JSX.Element {
  return (
    <>
      <SkillsTitle>Tecnologías</SkillsTitle>
      <SkillsContainer>
        {props.data.map((skill) => (
          <SkillsIconLi key={skill[1]}>
            <img src={skill[1]} loading="lazy" />
            <span className="tool-tip">{skill[0]}</span>
          </SkillsIconLi>
        ))}
      </SkillsContainer>
    </>
  );
}

import React from "react";
import Knowledge from "../../components/Knowledge/Knowledge";
import Proyects from "../../components/Proyects/Proyects";
import Skills from "../../components/Skils/Skills";
import { ResumeSection, ResumeTitle, ResumeWrapper } from "./ResumeElements";
import data from "../../data-cv";

export default function Resume(): JSX.Element {
  return (
    <ResumeWrapper>
      <ResumeTitle>📑Resumen</ResumeTitle>
      <ResumeSection>
        <Knowledge data={data.knowledge} />
      </ResumeSection>
      <ResumeSection>
        <Skills data={data.skills} />
      </ResumeSection>
      <ResumeSection>
        <Proyects data={data.proyects} />
      </ResumeSection>
    </ResumeWrapper>
  );
}

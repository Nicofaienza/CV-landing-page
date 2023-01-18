import React from "react";
import {
  KnowContainerItems,
  KnowitemsLi,
  KnowTitle,
} from "./KnowledgeElements";

interface Props {
  data: Array<string>;
}

export default function Knowledge(props: Props): JSX.Element {
  return (
    <>
      <KnowTitle>Áreas de conocimiento</KnowTitle>
      <KnowContainerItems>
        {props.data.map((item) => (
          <KnowitemsLi key={item}>{item}</KnowitemsLi>
        ))}
      </KnowContainerItems>
    </>
  );
}

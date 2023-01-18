import styled from "styled-components";

export const ResumeWrapper = styled.div`
  width: 90%;
  max-width: 1170px;
  margin: auto;
  background: #fff;
  margin-top: 195px;
  display: flex;
  flex-direction: column;
  gap: 96px;
  padding: 97px 85px;
  border: 1px solid #ecebe6;
  box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  @media screen and (max-width: 1000px) {
    padding: 39px 24px;
    gap: 60px;
  }
`;

export const ResumeTitle = styled.h2`
  font-weight: 800;
  font-size: 52px;
  line-height: 125%;

  @media screen and (max-width: 1000px) {
    font-size: 28px;
  }
`;

export const ResumeSection = styled.div``;

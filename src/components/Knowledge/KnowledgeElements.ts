import styled from "styled-components";

export const KnowTitle = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 125%;
  color: var(--gray);
  margin-bottom: 40px;

  @media screen and (max-width: 1000px) {
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

export const KnowContainerItems = styled.ul`
  border-top: 1px solid #e8e8e8;
  width: 100%;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-left: 22px;

  @media screen and (max-width: 1000px) {
    padding-top: 30px;
  }
`;

export const KnowitemsLi = styled.li`
  width: 70%;
  font-weight: 500;
  font-size: 18px;
  line-height: 151.5%;
  color: var(--black);

  @media screen and (max-width: 1000px) {
    font-size: 15px;
  }
`;

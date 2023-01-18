import styled from "styled-components";

export const SkillsTitle = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 125%;
  color: var(--gray);
  margin-bottom: 40px;

  @media screen and (max-width: 1000px) {
    font-size: 15px;
  }
`;

export const SkillsContainer = styled.ul`
  width: 100%;
  border-top: 1px solid #e8e8e8;
  padding-top: 60px;
  list-style: none;
  display: flex;
  gap: 60px;

  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const SkillsIconLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border: 1px solid rgba(64, 65, 82, 0.2);
  box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
`;

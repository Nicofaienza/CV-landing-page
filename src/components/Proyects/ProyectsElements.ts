import styled from "styled-components";

export const ProyectsTitle = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 125%;
  color: var(--gray);
  margin-bottom: 40px;

  @media screen and (max-width: 1000px) {
    font-size: 15px;
  }
`;

export const ProyectsContainer = styled.ul`
  width: 100%;
  border-top: 1px solid #e8e8e8;
  padding-top: 60px;
  list-style: none;
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 1000px) {
  }
`;

export const ProyectsCard = styled.li`
  width: 290px;
  min-width: 230px;
  height: 400px;
  padding: 24px;
  border: 0.5px solid rgba(64, 65, 82, 0.2);
  box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

export const ProyectsCardName = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  color: #404152;
`;

export const ProyectsCardImgCont = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;
  transition: border 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    width: 300%;
    height: 200%;
    position: absolute;
    background: #fff;
    z-index: 2;
    transform: rotate(18deg);
    top: 140%;
    left: -120px;
    transition: all 0.5s ease;
    filter: opacity(0.9);
  }

  &:hover {
    border: 1px solid rgba(64, 65, 82, 0.2);
    box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
  }

  &:hover::before {
    top: -120px;
    left: -90px;
  }

  & img {
    height: 100%;
    position: absolute;
  }

  & .proyect-btn {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 4;
    animation-name: fadein;
    transition: all 0.3s ease;
    animation-duration: 0.5s;

    @keyframes fadein {
      0% {
        filter: opacity(0);
      }
      50% {
        filter: opacity(0);
      }
      100% {
        filter: opacity(100%);
      }
    }
  }
`;

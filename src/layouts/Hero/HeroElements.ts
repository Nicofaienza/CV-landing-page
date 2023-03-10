import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 90%;
  max-width: 1170px;
  margin: auto;
  position: relative;

  & #hero__container {
    display: flex;
    margin-top: 128px;
  }

  & #hero__container__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    width: 50%;
  }

  @media screen and (max-width: 1130px) {
    & #hero__container {
      flex-direction: column;
      gap: 96px;
    }

    & #hero__container__text {
      width: 90%;
    }
  }
`;

export const HeroHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0 0 0;
  position: relative;
  z-index: 10;

  & span {
    font-weight: 800;
    font-size: 22px;
    line-height: 109.5%;
    color: #060a11;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  & #hero__links-container {
    display: flex;
    gap: 20px;
  }

  & .hero__logo-container {
    width: 64px;
    height: 64px;
    background: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  & .hero__logo-container:hover {
    transform: scale(1.03);
    box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.04);
  }

  & .logo-links {
    width: 36px;
    height: 36px;
  }

  /* RESPONSIVE */

  @media screen and (max-width: 1400px) {
    & .hero__logo-container {
      width: 48px;
      height: 48px;
    }

    & .logo-links {
      width: 24px;
      height: 24px;
    }
  }

  @media screen and (max-width: 1130px) {
    & span {
      font-size: 18px;
    }

    & .hero__logo-container {
      width: 32px;
      height: 32px;
    }

    & .logo-links {
      width: 18px;
      height: 18px;
    }
  }
`;

export const HeroTitle = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 115%;
  color: var(--black);
  width: min-content;

  @media screen and (max-width: 1400px) {
    font-size: 50px;
  }

  @media screen and (max-width: 1130px) {
    font-size: 42px;
  }
`;

export const HeroText = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 160%;
  color: var(--black);
  @media screen and (max-width: 1400px) {
    font-size: 20px;
  }

  @media screen and (max-width: 1130px) {
    font-size: 18px;
    max-width: 500px;
  }
`;

export const HeroButton = styled.a`
  display: flex;
  align-items: center;
  padding: 18px 24px;
  background: var(--black);
  border: 2px solid var(--black);
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: max-content;
  width: max-content;
  color: #fff;

  &::before {
    content: "";
    width: 200%;
    height: 300%;
    transform: rotate(15deg);
    background: #fff;
    position: absolute;
    top: 100px;
    left: -100px;
    transition: all 0.5s ease;
  }

  & span {
    position: relative;
    z-index: 10;
    transition: color 0.3s ease;
    color: #fff;
  }

  & img {
    position: relative;
    top: 2px;
    height: 25px;
    width: 25px;
    transform: rotate(45deg);
    transition: transform 0.7s ease;
  }

  &:hover {
    border: 2px solid var(--black);
    box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.04);
    color: var(--black);
  }

  &:hover::before {
    left: -30px;
    top: -60px;
  }

  &:hover img {
    transform: rotate(180deg);
    filter: brightness(0);
  }

  &:hover span {
    color: var(--black);
  }

  @media screen and (max-width: 1130px) {
    font-size: 12px;
    padding: 14px 20px;

    & img {
      width: 15px;
      height: 15px;
    }
  }
`;

export const HeroImgContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: -1;

  & img {
    width: 100%;
  }

  @media screen and (max-width: 1130px) {
    position: relative;
    top: 0;
    left: -20px;
    overflow: hidden;
    width: 80%;
    align-self: center;

    & img {
    }
  }
`;

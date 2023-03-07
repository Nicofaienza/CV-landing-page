import styled from "styled-components";

export const ContactWrapper = styled.div`
  width: 90%;
  max-width: 1170px;
  margin: 196px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1000px) {
    margin: 96px auto;
  }
`;

export const ContactTitle = styled.h2`
  width: 65%;
  font-weight: 800;
  font-size: 64px;
  line-height: 125%;
  color: var(--black);
  margin-bottom: 80px;
  align-self: flex-start;

  @media screen and (max-width: 1000px) {
    font-size: 42px;
    width: 95%;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  margin-bottom: 196px;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 60px;
    margin-bottom: 96px;
  }
`;

export const ContactImgCont = styled.div`
  & img {
    width: 90%;
    position: relative;
    top: 30px;
  }
`;

export const ContactForm = styled.form`
  max-width: 520px;
  width: 520px;
  border: 0.5px solid rgba(64, 65, 82, 0.2);
  box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 60px 32px;
  gap: 32px;
  align-self: center;

  & span {
    font-weight: 700;
    font-size: 28px;
    line-height: 145%;
    color: var(--black);
  }

  @media screen and (max-width: 1000px) {
    width: 100%;

    & span {
      font-size: 20px;
      width: 80%;
    }
  }
`;

export const ContactInput = styled.input`
  width: 100%;
  height: 64px;
  border: 2px solid #cbd4db;
  border-radius: 10px;
  padding-left: 22px;
  outline: none;
  font-size: 18px;

  &::placeholder {
    font-weight: 500;
    font-size: 18px;
    color: #404152;
  }

  &:focus {
    font-size: 18px;
    border: 2px solid var(--black);
    background: #fff;
  }

  @media screen and (max-width: 1000px) {
    height: 52px;
    font-size: 12px;

    &::placeholder {
      font-size: 12px;
    }
    &:focus {
      font-size: 12px;
    }
  }
`;

export const ContactTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  border: 1px solid #cbd4db;
  border-radius: 10px;
  resize: none;
  padding-left: 22px;
  padding-top: 16px;

  &::placeholder {
    font-weight: 500;
    font-size: 18px;
    color: #404152;
  }

  &:focus {
    font-size: 18px;
    outline: 2px solid var(--black);
  }

  @media screen and (max-width: 1000px) {
    font-size: 12px;

    &::placeholder {
      font-size: 12px;
    }
    &:focus {
      font-size: 12px;
    }
  }
`;

export const ContactButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: var(--black);
  height: 64px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  & span {
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    transition: all 0.3s ease;
    position: relative;
    z-index: 10;
    width: min-content;
  }

  &:hover span {
    color: var(--black);
  }

  & img {
    transform: rotate(45deg);
    height: 25px;
    width: 25px;
    position: relative;
    top: 2px;
    transition: all 0.3s ease;
  }

  &::before {
    content: "";
    width: 200%;
    height: 400%;
    transform: rotate(15deg);
    background: #fff;
    position: absolute;
    top: 200px;
    left: -100px;
    transition: all 0.5s ease;
  }

  &:hover {
    border: 2px solid var(--black);
    box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.04);
  }

  &:hover::before {
    left: -30px;
    top: -60px;
  }

  &:hover img {
    filter: brightness(0);
  }

  & button {
    position: absolute;
  }

  @media screen and (max-width: 1000px) {
    height: 48px;

    & span {
      font-size: 14px;
    }
  }
`;

export const ContactButtonArrow = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: var(--black);
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  & img {
    transition: all 0.3s ease;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: #fff;
    border-radius: 8px;
    top: 100%;
    transition: all 0.3s ease;
  }

  &:hover::before {
    top: 0;
  }

  &:hover img {
    filter: brightness(0);
  }

  &:hover {
    border: 1px solid var(--black);
    box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.04);
  }

  @media screen and (max-width: 1000px) {
    width: 40px;
    height: 40px;

    & img {
      height: 32px;
      width: 32px;
    }
  }
`;

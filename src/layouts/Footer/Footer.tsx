import React from "react";
import {
  FooterContainer,
  FooterEmail,
  FooterLinks,
  FooterLinksLi,
  FooterLogoCont,
  FooterWrapper,
} from "./FooterElements";
import logoImg from "../../images/logo-white.png";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterEmail>
          Email: <span>nicolas.faienza1@gmail.com</span>
        </FooterEmail>
        <FooterLogoCont>
          <img src={logoImg} alt="Logo" />
        </FooterLogoCont>
        <FooterLinks>
          <FooterLinksLi>
            <a
              href="https://www.linkedin.com/in/nicolas-faienza/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </FooterLinksLi>
          <FooterLinksLi>
            <a href="https://github.com/Nicofaienza" target="_blank">
              <FaGithubSquare />
            </a>
          </FooterLinksLi>
        </FooterLinks>
      </FooterContainer>
    </FooterWrapper>
  );
}

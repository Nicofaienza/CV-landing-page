import React from "react";
import {
  ContactButton,
  ContactButtonArrow,
  ContactContainer,
  ContactForm,
  ContactImgCont,
  ContactInput,
  ContactTextArea,
  ContactTitle,
  ContactWrapper,
} from "./ContactElements";

import contactImg from "../../images/contact-img.png";
import arrow from "../../images/arrow-icon.png";

export default function Contact(): JSX.Element {
  return (
    <ContactWrapper id="contact">
      <ContactTitle>¿Querés contactarte conmigo? 📫</ContactTitle>
      <ContactContainer>
        <ContactImgCont>
          <img src={contactImg} loading="lazy" />
        </ContactImgCont>
        <ContactForm>
          <span>¿Tenés alguna duda? Mandame un mensaje.</span>
          <ContactInput placeholder="Nombre y apellido / Empresa"></ContactInput>
          <ContactInput placeholder="Email"></ContactInput>
          <ContactTextArea placeholder="Mensaje"></ContactTextArea>
          <ContactButton>
            <span>Enviar</span>
            <img src={arrow} />
          </ContactButton>
        </ContactForm>
      </ContactContainer>
      <ContactButtonArrow href="#">
        <img src={arrow} loading="lazy" />
      </ContactButtonArrow>
    </ContactWrapper>
  );
}

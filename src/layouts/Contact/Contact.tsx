import { useState } from "react";
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
        <ContactForm action="https://formspree.io/f/meqwolna" method="POST">
          <span>
            ¿Tenés alguna duda? <br /> Enviame un mensaje.
          </span>
          <label>
            <ContactInput
              type="text"
              name="name"
              placeholder="Nombre y apellido / Empresa"
              required
            ></ContactInput>
          </label>
          <label>
            <ContactInput
              type="email"
              name="email"
              placeholder="Email"
              required
            ></ContactInput>
          </label>
          <label>
            <ContactTextArea
              required
              name="message"
              placeholder="Mensaje"
            ></ContactTextArea>
          </label>
          <ContactButton type="submit">
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

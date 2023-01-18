import styled from "styled-components";

export const FooterWrapper = styled.footer`
  height: 85px;
  background: var(--black);
  @media screen and (max-width: 1000px) {
    height: max-content;
  }
`;

export const FooterContainer = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1170px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  position: relative;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 40px 0;
    gap: 60px;
  }
`;

export const FooterEmail = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 25px;
  color: #e1e9f0;

  & span {
    font-weight: 300;
  }

  @media screen and (max-width: 1000px) {
    order: 2;
  }
`;

export const FooterLogoCont = styled.div`
  & img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;

    @media screen and (max-width: 1000px) {
      position: relative;
    }
  }
`;

export const FooterLinks = styled.ul`
  display: flex;
  gap: 32px;
`;

export const FooterLinksLi = styled.li`
  list-style: none;
  width: 32px;
  height: 32px;
  & a {
    width: 100%;
    height: 100%;
  }

  & svg {
    width: 100%;
    height: 100%;
    color: #fff;
  }
`;

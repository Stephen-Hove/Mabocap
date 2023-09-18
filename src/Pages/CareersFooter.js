import React from "react";
import { Col, Container } from "react-bootstrap";

export default function Footer() {
  function scrollToSection(targetId) {
    const targetSection = document.getElementById(targetId);
  
    if (targetSection) {
      const yOffset = -70; // Adjust this value to control how much above the target section you want to scroll
      const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="footer">
      <Container className="d-flex flex-column">
        <ul className="footer__nav d-flex flex-wrap">

            <Col xs={4} md={4} lg={2}>
                <li className="footer__item">
                    <a className="footer__link" a href="/">
                    Home
                    </a>
                </li>
            </Col>

            <Col xs={4} md={4} lg={2}>
                <li className="footer__item">
                    <a className="footer__link" a href="/careers">
                    Careers
                    </a>
                </li>
            </Col>

            <Col xs={4} md={4} lg={2}>
                <li className="footer__item">
                    <a className="footer__link" a href="/gallery">
                    Gallery
                    </a>
                </li>
            </Col>
        </ul>
        <p className="footer__copyright">
          &copy; 2023 MABOCAP. All Rights Reserved. <br />
          Developed by
          <a
            className="footer__link twitter-link"
            target="_blank"
            href="https://www.linkedin.com/in/stephen-hove-67847010a/"
          >
            {" "}
            Stephen Hove
          </a>
        </p>
      </Container>
    </footer>
  );
}

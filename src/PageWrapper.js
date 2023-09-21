import React, { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PageWrapper() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  function closeNavbar() {
    setExpanded(false);
  }

  function scrollToSection(targetId) {
    const targetSection = document.getElementById(targetId);
    closeNavbar(); // Close the menu when an item is clicked

    if (targetSection) {
      const yOffset = -100;
      let y =
        targetSection.getBoundingClientRect().top + window.scrollY + yOffset;

      if (expanded) {
        // If the Navbar is expanded (mobile mode), subtract the height of the Navbar
        const navbarHeight =
          document.querySelector(".navbar").offsetHeight - 160;
        y -= navbarHeight;
      }

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      
    }
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="img/logo.png"
            alt="Mabocap logo"
            id="logo"
            data-version-number="1.0"
            style={{ width: "12rem", height: "auto"}}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={toggleNavbar}
        />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Container 
          className={`d-flex ${
            expanded ? "justify-content-start" : "justify-content-end"
          }`}>
            <Nav className="mr-auto" >
              <Nav.Link
                id="about-link"
                style={{
                  color: "#222",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  marginTop: "1rem",
                }}
                onClick={() => scrollToSection("about")}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                style={{
                  color: "#222",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  marginTop: "1rem",
                }}
                id="services-link"
                onClick={() => scrollToSection("services")}
              >
                Services
              </Nav.Link>
              <Nav.Link
                style={{
                  color: "#222",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  marginTop: "1rem",
                }}
                id="projects-link"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection("contact")}>
                <Button style={{
                    backgroundColor: "#d46a6a",
                    borderRadius: "3rem",
                    borderColor: "#d46a6a",
                    color: "#222",
                    marginTop: "0.5rem",
                  }}>Contact Us</Button>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

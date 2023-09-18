import React, { useState } from "react";

import { Container, Navbar, Nav, Button } from "react-bootstrap";

export default function PageWrapper() {
  const [expanded, setExpanded] = useState(true);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  function scrollToSection(targetId) {
    const targetSection = document.getElementById(targetId);
  
    if (targetSection) {
      const yOffset = -100; // Adjust this value to control how much above the target section you want to scroll
      const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };    
  
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/">
          {" "}
          <img
            src="img/logo.png"
            alt="Mabocap logo"
            id="logo"
            data-version-number="1.0"
            style={{ width: "16rem", height: "auto" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{
            border: "none",
            fontSize: "1.5rem",
            color: "#222",
            marginTop: "1rem",
          }}
          onClick={toggleNavbar}
        />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Container
            className={`d-flex ${
              expanded ? "justify-content-end" : "justify-content-start"
            }`}
          >
            <Nav className=" ml-auto " style={{ gap: "1rem" }}>
              <Nav.Link
                //href="#about"
                onClick={() => scrollToSection("about")}
                style={{
                  color: "#222",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  marginTop: "1rem",
                }}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                //href="#services"
                onClick={() => scrollToSection("services")}
                style={{
                  color: "#222",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  marginTop: "1rem",
                }}
              >
                Services
              </Nav.Link>
              <Nav.Link
                //href="#projects"
                onClick={() => scrollToSection("projects")}
                style={{
                  color: "#222",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  marginTop: "1rem",
                }}
              >
                Projects
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection("contact")}>
                {" "}
                <Button
                  style={{
                    backgroundColor: "#d46a6a",
                    borderRadius: "3rem",
                    borderColor: "#d46a6a",
                    color: "#222",
                    marginTop: "0.5rem",
                  }}
                >
                  Contact Us
                </Button>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

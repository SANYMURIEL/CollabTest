import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary text-light py-4">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h5>À propos de nous</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col xs={12} md={4}>
            <h5>Nos Services</h5>
            <ul>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5>Contactez-nous</h5>
            <p>Email: contact@example.com</p>
            <p>Téléphone: 123-456-7890</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="text-center">
              &copy; 2024 Mon Entreprise. Tous droits réservés.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

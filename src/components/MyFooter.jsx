import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="bg-dark text-secondary py-4 mt-5">
      <Container>
        <Row className="mb-3">
          <Col className="d-flex gap-3">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-youtube"></i>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            <p>Audio and Subtitles</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </Col>
          <Col xs={6} md={3}>
            <p>Audio Description</p>
            <p>Investor Relations</p>
            <p>Legal Notices</p>
          </Col>
          <Col xs={6} md={3}>
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
          </Col>
          <Col xs={6} md={3}>
            <p>Gift Cards</p>
            <p>Terms of Use</p>
            <p>Corporate Information</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <button className="btn btn-outline-secondary btn-sm">Service Code</button>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <small>&copy; {new Date().getFullYear()} Netflix Clone by EpiCode</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
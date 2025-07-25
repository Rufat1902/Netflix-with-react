import { Navbar, Nav, Container } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';

const MyNavbar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            height="30"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav navbarScroll>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center gap-3 ms-auto">
            <Nav.Link href="#">
              <i className="bi bi-search text-white"></i>
            </Nav.Link>
            <Nav.Link href="#">KIDS</Nav.Link>
            <Nav.Link href="#">
              <i className="bi bi-bell text-white"></i>
            </Nav.Link>
            <Nav.Link href="#">
              <i className="bi bi-person-circle text-white fs-4"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container className="d-flex align-items-center mt-5">
      <h2>TV Shows</h2>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ marginLeft: '20px' }}>
        Genres
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Comedy</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Drama</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Container>
      </>
  );
};

export default MyNavbar;
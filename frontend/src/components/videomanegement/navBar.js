import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg" className="navbar navbar-dark bg-dark" >
      <Container>
        <Navbar.Brand href="#">ICTFromABC</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 me-auto my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">TimeTable</Nav.Link>
            <Nav.Link href="#action1">Students</Nav.Link>
            <Nav.Link href="/allAdm">Employees</Nav.Link>
            <NavDropdown a href="/selectGrade" title="Videos" id="navbarScrollingDropdown ">
              <NavDropdown.Item href="#action3">Grade 10</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Grade 11
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                ALs
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/store">
              Store
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
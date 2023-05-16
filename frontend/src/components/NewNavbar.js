import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
  
      
    <Navbar bg="light" expand="lg" className="navbar navbar-dark bg-dark " >
      <Container className='d-flex justify-content-center'>
        <div className='d-flex justify-content-center'>
        <Navbar.Brand href="#">ICTFromABC</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#action2">TimeTable</Nav.Link>
            <Nav.Link href="#action1">Students</Nav.Link>
            <Nav.Link href="/allAdm">Employees</Nav.Link>
            <NavDropdown title="Class" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Grade 10</NavDropdown.Item>
              <NavDropdown.Item href="/purchase/grade11">
                Grade 11
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                ALs
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  href="/getpro">
              Store
            </Nav.Link>
            <NavDropdown title="Student" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/#">Purchase Class</NavDropdown.Item>
              <NavDropdown.Item href="mypayments"> Requested Classes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    
  );
}

export default NavScrollExample;
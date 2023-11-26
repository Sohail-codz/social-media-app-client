import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'lightblue', position:'fixed', width:'100vw', top:0, zIndex:'1000'}} data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Social Media App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Sign Up</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import logoApp from '../assets/images/R.jpg'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" >
        <Container>
          <Navbar.Brand href="/">
            
            <img
             src={logoApp}
             width="30"
             height="30"
             className='d-inline-block alogn-top'
             alt="React boo"
            />
            <span>    SHOP</span>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
               <NavLink to="/" className='nav-link'>HOME</NavLink>
               <NavLink to="/brand" className='nav-link'>Brand Manager</NavLink>              
             
            </Nav>
            <Nav>
              <NavDropdown title="Setting">
                <NavDropdown.Item href='/login'> Login</NavDropdown.Item>
                <NavDropdown.Item href='/logout'> Logout</NavDropdown.Item>

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
      </>
    )
}
export default Header;
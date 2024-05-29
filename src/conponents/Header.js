import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import logoApp from '../assets/images/R.jpg'
import { NavLink , useNavigate} from 'react-router-dom';
import {toast} from "react-toastify";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../context/UserContext";

const Header = (props) => {
    const {logout ,user} = useContext(UserContext)
    const   navigation = useNavigate();
    const [hideHeader,setHideHeader] = useState();
    const handleLogout = () =>{
        logout();
        navigation("/");
        toast.success("Logout successfully");
    }
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
              {(user && user.auth || window.location.pathname === '/') &&
                  <>
            <Nav className="me-auto">
               <NavLink to="/" className='nav-link'>HOME</NavLink>
               <NavLink to="/brand" className='nav-link'>Brand Manager</NavLink>              
             
            </Nav>
            <Nav>
                    { user && user.email && <span className="nav-link"> Welcome {user.email}</span> }
              <NavDropdown title="Setting">
                  {user && user.auth === true ?
                      <NavDropdown.Item onClick={()=> handleLogout()}> Logout</NavDropdown.Item> :
                      <NavLink to="/login" className='dropdown-item'>Login</NavLink>
                  }



              </NavDropdown>
            </Nav>
      </>
          }
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
      </>
    )
}
export default Header;
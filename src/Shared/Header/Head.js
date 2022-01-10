import React from 'react';
import 'aos/dist/aos.css';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useContextBase from '../../pages/hooks/useContextbase';
import './Header.css';

const Header = () => {
 
  const {user,logOut} =useContextBase();
    return (
      
        <div>
            <Navbar className="navbar" bg="" variant="dark" fixed="top" collapseOnSelect expand="lg">
    <Container  className="">
    <Navbar.Brand  className="fw-bold brand name" href="/home#home"> <span className='brand-name'>Daily Need</span> </Navbar.Brand>
    
    
    <Navbar.Toggle className='text-dark' />
    <Navbar.Collapse className="justify-content-end text-dark">
      <Nav.Link  className="text-dark  link" as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link  className="text-dark  link" as={HashLink} to="/home#products">Products</Nav.Link>
      <Nav.Link  className="text-dark  link" as={HashLink} to="/moreproducts">More Products</Nav.Link>
      <Nav.Link  className="text-dark  link" as={HashLink} to="/ourBlogs"> Our Blogs </Nav.Link>
      <Nav.Link  className="text-dark  link" as={HashLink} to="/aboutUs">About us</Nav.Link>
      <Nav.Link  className="text-dark  link" as={HashLink} to="/contactUs">Contact us</Nav.Link>
      {
        user?.email && <Nav.Link  className="text-dark link" as={Link} to="/dashboard">My DashBoard</Nav.Link>
      }

 {
   user.email ? 
   <Navbar.Text>
     
     <button onClick={logOut} className="btn btn-primary">Log Out</button>
     
     <Image className="ms-3" style={{width:30}} src={user.photoURL} roundedCircle />
   </Navbar.Text>
   
   :
   <Nav.Link className="btn btn-warning text-dark" as={Link} to="/login">Login</Nav.Link>
 }
 {
   user?.email &&  <Navbar.Text className="ms-3 text-dark fw-bold" >{user.displayName}</Navbar.Text>
 }
      
      
      </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
        
    );
};

export default Header;
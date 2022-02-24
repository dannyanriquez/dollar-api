import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {MDBContainer,MDBNavbar,MDBNavbarBrand,MDBNavbarToggler,MDBNavbarNav,MDBNavbarItem,MDBCollapse} from 'mdb-react-ui-kit';
import { Nav } from 'react-bootstrap';


export const Navbar = () => {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        
          <MDBNavbarBrand>
            <Nav.Link as={Link} to="/">
              <i class="fas fa-hand-holding-usd"></i>
            </Nav.Link>
          </MDBNavbarBrand>
        
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}>


        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav color='black' className=''>
            <MDBNavbarItem>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <Nav.Link as={Link} to="/cotizaciones">Dolar</Nav.Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
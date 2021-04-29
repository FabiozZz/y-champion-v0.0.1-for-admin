import React from 'react';
import './navHeader.css';
import {Button, Form, FormControl, Image, Nav, Navbar, NavDropdown} from "react-bootstrap";

export const NavHeader = (props)=> {
  return (
   <>
       <Navbar sticky={'top'} bg={'light'} expand="lg">
           {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
           {/*<Navbar.Collapse id="basic-navbar-nav">*/}
               <Nav className="w-100 flex flex-row justify-content-around">
                   <Button onClick={props.open} variant={'dark'}>Menu</Button>
                   <Button variant={'outline-info'}>Action 1</Button>
                   <Button variant={'outline-info'}>Action 2</Button>
                   <NavDropdown title="Если нужен можно оставить" id="basic-nav-dropdown">
                       <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                       <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                       <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                       <NavDropdown.Divider />
                       <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                   </NavDropdown>
                   <Button variant={'outline-info'}>Action 3</Button>
                   <Button variant={'outline-info'}>Action 4</Button>
               </Nav>
           {/*</Navbar.Collapse>*/}
       </Navbar>
   </>
  );
}
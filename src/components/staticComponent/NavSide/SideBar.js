import React from 'react';
import logo from '../../../assets/images/logo.svg';
import './sideBar.css';
import {Nav, Navbar,Accordion,Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const SideBar = () => {

    return (
        <>
            <Navbar className={'sideWrapper'} bg={'light'}>
                <Navbar.Brand className={'sideWrapper__logo'}><img src={logo} alt={'logo'}/></Navbar.Brand>
                <Nav className={'sideWrapper__list mt-2'}>
                    <Nav.Link className={'sideWrapper__list__item'} as={NavLink} to={'/home1'}>Табличка 1</Nav.Link>
                    <Nav.Link className={'sideWrapper__list__item'} as={NavLink} to={'/home2'}>Табличка 2</Nav.Link>
                    <Nav.Link className={'sideWrapper__list__item'} as={NavLink} to={'/home3'}>Табличка 3</Nav.Link>
                    <Nav.Link className={'sideWrapper__list__item'} as={NavLink} to={'/home4'}>Табличка 4</Nav.Link>
                    <Accordion as={'div'} className={'sideWrapper__list__accordClose'}>
                        <Accordion.Toggle  style={{background:{}}} as={Nav.Link} eventKey="1">
                            сворачивается
                        </Accordion.Toggle>
                        <Accordion.Collapse className={'sideWrapper__list__item__accordOpen'} eventKey="1">
                            <Card.Body as={'div'}>
                                <Nav.Link as={NavLink} to={'/exampleTable'}>some 1</Nav.Link>
                                <Nav.Link as={NavLink} to={'/some2'}>some 2</Nav.Link>
                                <Nav.Link as={NavLink} to={'/some3'}>some 3</Nav.Link>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                </Nav>
            </Navbar>
        </>
    );
};

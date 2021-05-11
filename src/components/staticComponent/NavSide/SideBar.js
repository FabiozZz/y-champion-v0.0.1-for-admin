import React from 'react';
import logo from '../../../assets/images/logo.svg';
import './sideBar.css';
import {Nav, Navbar, Accordion, Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const SideBar = () => {
    return (
        <Navbar className={'sideWrapper'} bg={'light'}>
            {/*лого компании*/}
            <Navbar.Brand className={'sideWrapper__logo'}><img src={logo} alt={'logo'}/></Navbar.Brand>
            <Nav className={'sideWrapper__list mt-2'}>
                {/*
                основные ссыли
                */}
                <Nav.Link className={'sideWrapper__list__item'} as={NavLink} to={'/home1'}>Табличка 1</Nav.Link>
                <Nav.Link className={'sideWrapper__list__item'} as={NavLink} to={'/home2'}>Табличка 2</Nav.Link>
                <Nav.Link className={'sideWrapper__list__item'} as={NavLink} to={'/exampleDiagPie'}>Пример диаграммы</Nav.Link>
                {/*
                аккордион
                */}
                <Accordion as={'div'} className={'sideWrapper__list__accordClose'}>
                    <Accordion.Toggle as={Nav.Link} eventKey="1">
                        Абонементы
                    </Accordion.Toggle>
                    <Accordion.Collapse className={'sideWrapper__list__item__accordOpen'} eventKey="1">
                        {/*
                        ссылки в аккордионе
                        */}
                        <Card.Body as={'div'}>
                            <Nav.Link as={NavLink} to={'/adult'}>Взрослые</Nav.Link>
                            <Nav.Link as={NavLink} to={'/child'}>Дети</Nav.Link>
                        </Card.Body>
                    </Accordion.Collapse>
                </Accordion>
            </Nav>
        </Navbar>
    );
};

import React, {useState} from 'react';
import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const CustomAccordion = ({title,onClick,link,active,children})=> {

  return (
   <div>
       <Nav.Link as={NavLink} onClick={onClick} to={`/adult/${link}`}>{title}</Nav.Link>
       {active&&<div>ghbdtn</div>}
   </div>
  );
}
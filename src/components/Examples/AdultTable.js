import React, {useEffect, useState} from 'react';
import {Accordion, Card, Nav} from "react-bootstrap";
import {abortAxiosCalling, getAdultBoks, getAdultTay, getContentData, getCourse} from "../../Api/api";
import {TableS} from "./Table/Table";
import {CustomAccordion} from "../../utils/accordion/CustomAccordion";
import {useLocation} from "react-router";
import {NavLink} from "react-router-dom";

const styles = {
    root:{
        maxHeight: '88vh',
        width:'100%',
        fontSize: '0.9rem'
    },
    navlink:{background:'lightgray',position:'sticky',top:'0',bottom:'0',display:'block'}
}

export const AdultTable = ()=> {
    const [section,setSection] = useState([]);
    const [courses,setCourses] = useState([]);
    const toggleActiveItem =async (e)=>{
    const link = e.target.getAttribute('href');
    const response =await getContentData(link)
    setSection(await response.data);
}

const courseList = courses.map((el,index)=> {
    return (
        <React.Fragment key={index}>
            <Accordion.Toggle  onClick={toggleActiveItem} style={styles.navlink} as={NavLink} to={`/adult/${el.uri}`} eventKey={index + 1}>
                {el.name}
            </Accordion.Toggle>
            <Accordion.Collapse  className={''} eventKey={index + 1 }>
                <TableS data={section}/>
            </Accordion.Collapse>
        </React.Fragment>
    )})
useEffect(async ()=>{
    const courses = await getCourse();
    setCourses(await courses.data)

    return ()=>{
        abortAxiosCalling();
    }
},[])
return (
    <div style={styles.root}>
        <Accordion as={'div'} className={'text-center'} >
            {courseList}
        </Accordion>
    </div>
);
}
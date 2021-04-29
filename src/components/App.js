import {BrowserRouter} from "react-router-dom";
import './app.css';
import {Button, Col, Container, Navbar, Row} from "react-bootstrap";
import {Route, Switch} from "react-router";
import {NavHeader} from "./staticComponent/NavHeader/NavHeader";
import {SideBar} from "./staticComponent/NavSide/SideBar";
import {ExampleTable} from "./Examples/ExampleTable";
import {ExampleDiagrams} from "./Diagrams/ExampleDiagrams";
import {AdultTable} from "./Examples/AdultTable";
import Sidebar from "react-sidebar";
import React, {useState} from "react";

function App() {
    const [sidebarOpen,setSidebarOpen] = useState(false);
    const onSidebarOpen = (open)=>{
        setSidebarOpen(open)
    }

    const style = {
        root:{

            height:'100vh',
            width:'100vw',
            overflow:'auto'
        },
        header:{
        },
        sideBar:{
            background: 'lightblue',
        },
        main:{
            width:'100%',
            height:'100%',
            overflow: 'auto'
        },
        button:{
            position:'absolute',
            zIndex:999999,
            bottom:'30px',
            left:'30px'
        }
    }
    return (
        <BrowserRouter>
                {/*<SideBar id={'side'}/>*/}
            <Container  fluid>
                <Row style={style.root} className={'p-n0'}>
                    <Sidebar styles={{sidebar:{background:'white',width:'15%',zIndex:99999999999999}}}
                             sidebar={<SideBar/>}
                             open={sidebarOpen} onSetOpen={onSidebarOpen}>

                    <Col id={'wrap-side'} className={'p-n1'}>
                        <Row className={'p-n0'}>
                            <Col className={'p-0'} style={style.header} xs={12}>
                                <NavHeader open={onSidebarOpen}/>
                            </Col>
                        </Row>
                        <Row className={'p-n1'}>
                            <Col className={'p-0'} style={style.main}>
                                <Switch>
                                    <Route path={'/exampleTable'} render={()=><ExampleTable/>}/>
                                    <Route path={'/exampleDiagPie'} render={()=><ExampleDiagrams/>}/>
                                    <Route path={'/adult'} render={()=><AdultTable/>}/>
                                </Switch>
                            </Col>
                        </Row>
                    </Col>
                    </Sidebar>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default App;
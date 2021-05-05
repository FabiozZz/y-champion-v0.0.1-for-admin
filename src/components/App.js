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
import {ChaildTable} from "./Examples/ChaildTable";

function App() {
    // константы для управления сайдбаром
    const [sidebarOpen,setSidebarOpen] = useState(false);

    // функция для открытия\закрытия сайдбара
    const onSidebarOpen = (open)=>{
        setSidebarOpen(open)
    }

    // инлайн стили для элементов
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
            <Container fluid>
                <Row style={style.root} className={'p-n0'}>
                    {/*
                    Cайдбар от бутстраба в качестве пропса получает состояние сайдбара,
                    а также функция для открытия и закрытия
                    Компонент самого сайдбара находится в пропсе "sidebar"
                    */}
                    <Sidebar styles={{sidebar: {background: 'white', width: '15%', zIndex: 99999999999999}}}
                             sidebar={<SideBar/>}
                             open={sidebarOpen} onSetOpen={onSidebarOpen}>
                        <Col id={'wrap-side'} className={'p-n1'}>
                            <Row className={'p-n0'}>
                                <Col className={'p-0'} style={style.header} xs={12}>
                                    {/*header админки*/}
                                    <NavHeader open={onSidebarOpen}/>
                                </Col>
                            </Row>
                            <Row className={'p-n1'}>
                                <Col className={'p-0'} style={style.main}>
                                    {/*здесь отоброжается основное содержимое*/}
                                    <Switch>
                                        <Route path={'/exampleTable'} render={() => <ExampleTable/>}/>
                                        <Route path={'/exampleDiagPie'} render={() => <ExampleDiagrams/>}/>
                                        <Route path={'/adult'} render={() => <AdultTable/>}/>
                                        <Route path={'/child'} render={() => <ChaildTable/>}/>
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
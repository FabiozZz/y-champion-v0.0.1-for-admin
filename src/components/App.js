import {BrowserRouter} from "react-router-dom";
import './app.css';
import {Col, Container, Row} from "react-bootstrap";
import {Route, Switch} from "react-router";
import {NavHeader} from "./staticComponent/NavHeader/NavHeader";
import {SideBar} from "./staticComponent/NavSide/SideBar";
import {ExampleTable} from "./Examples/ExampleTable";
function App() {
    const style = {
        root:{
            height:'100vh',
            width:'100vw',
            overflowX:'auto'
        },
        header:{
        },
        sideBar:{
            background: 'lightblue',
        },
        main:{
            background: 'lightgreen',
        }
    }
    return (
        <BrowserRouter>
            <Container  fluid >
                <Row style={style.root} className={'p-n0'}>
                    <Col className={'p-0'}  xs={2}>
                        <SideBar/>
                    </Col>
                    <Col className={'p-n1'} xs={10}>
                        <Row className={'p-n0'}>
                            <Col className={'p-0'} style={style.header}>
                                <NavHeader/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Switch>
                                    <Route path={'/exampleTable'} render={()=><ExampleTable/>}/>
                                </Switch>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default App;
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './MainPage.css';
import SideNav from './SideNav';
import { SideNavContext } from '../context/SideNavContext';

export class MainPage extends React.Component {
    state = {
        items: ['Link System', 'Number-Shape', 'Number-Rhyme']
    }
    render() {
        return (
            <Container id="main-container" fluid>
                <Row id='header'>

                </Row>
                <Row id='main-body'>
                    <Col id='side-nav-container' lg={3}>
                        <SideNavContext.Provider value={this.state.items}>
                            <SideNav />
                        </SideNavContext.Provider>
                    </Col>
                    <Col id='content-container' lg={9}>

                    </Col>
                </Row>
            </Container>

        )
    }

}
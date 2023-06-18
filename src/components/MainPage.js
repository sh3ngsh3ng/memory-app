import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './MainPage.css';
import SideNav from './SideNav';
import { SideNavContext } from '../context/SideNavContext';
import { ListGame } from './ListGame';

export class MainPage extends React.Component {
    state = {
        items: ['Link System', 'Number-Shape', 'Number-Rhyme', 'Alphabet System'],
        currentSystem: '',
        setSystem: (system) => {
            this.setState({
                currentSystem: system
            })
        }
    }

    renderContent() {
        if (this.state.currentSystem === 'Link System') {
            return <ListGame key='Link System' systemName='Link System' numOfItems={10}/>
        } else if (this.state.currentSystem === 'Number-Shape') {
            return <ListGame key='Number-Shape' systemName='Number-Shape System' numOfItems={10}/>
        } else if (this.state.currentSystem === 'Number-Rhyme') {
            return <ListGame key='Number-Rhyme' systemName='Number-Rhyme System' numOfItems={10}/>
        } else if (this.state.currentSystem === 'Alphabet System') {
            return <ListGame key='Alphabet System' systemName='Alphabet System' numOfItems={26}/>
        } else {
            return "Select a system to begin"
        }
    }

    render() {
        return (
            <Container id="main-container" fluid>
                <Row id='header'>

                </Row>
                <SideNavContext.Provider value={this.state}>
                <Row id='main-body'>
                    <Col id='side-nav-container' lg={3}>
                        <SideNav />
                    </Col>
                    <Col id='content-container' lg={9}>
                        {this.renderContent()}
                    </Col>
                </Row>
                </SideNavContext.Provider>
            </Container>

        )
    }

}
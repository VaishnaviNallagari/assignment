import React, { Component } from 'react'
import Header from './Header'
import Sidelist from './Sidelist'
import Teamdetails from './Teamdetails'
import { Container, Row, Col } from 'reactstrap';

export default class Team extends Component {

    render() {
        return (
            <div>
               <Container>
                    <Row><Col><Header /></Col></Row>
                    <Row> 
                        <Col className="background" lg={3}><Sidelist /></Col>
                         <Col className="backgroundbox" lg={9}> <Teamdetails /></Col>  
                    </Row>  
                </Container>
                 
               
            </div>
        )
    }
}

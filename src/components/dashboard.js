import React, { Component } from 'react'
import Header from './Header'
import Sidelist from './Sidelist'
import Dashboarddetails from './Dashboarddetails'
import { Container, Row, Col } from 'reactstrap';

class dashboard extends Component {
    render() {
        return (
            <div >
                <Container>
                    <Row><Col><Header /></Col></Row>
                    <Row> 
                        <Col className="background" lg={3}><Sidelist /></Col>
                        <Col className="backgroundbox" lg={9}><Dashboarddetails /></Col>
                    </Row>
                    
                    
                </Container>
                
                
                
            </div>
        )
    }
}
export default dashboard
import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Sidelist extends Component {
    render() {
        return (
            <div >
                <Container>
                
        <Row className="list"><p><NavLink to='/dashboard'className="sidelist" activeClassName="active">DASHBOARD</NavLink></p></Row>
        <Row className="list"><p><NavLink to='/About' className="sidelist" activeClassName="active">ABOUT</NavLink></p></Row>     
        <Row style={{paddingTop:"20px"}}><p><NavLink to='/Team' className="sidelist" activeClassName="active">TEAM</NavLink></p></Row>    
        
      
               
                </Container>
               
                              
            </div>
        )
}
}
export default Sidelist

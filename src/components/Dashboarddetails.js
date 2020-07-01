import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Figure, Table }from 'react-bootstrap'
import Dashboardform from './dashboardform'

class Dashboarddetails extends Component {
    constructor(props){
        super(props)
            this.state = {
                UserID: "User ID",
                lastLogin: "07/june/2020",
                accountBalance: "$3000"
            }
        
    }
    render() {
        return (
            <div className="box">
                <Container>
                    <Row className="borderbottom">
                        <Col lg={2}>
                        <Figure>
                        <Figure.Image style={{height:100}} className="userimage" src="logo.svg/171x180"/> </Figure>
                        </Col>
                        <Col lg={10} className="username">
                        Welcome {this.state.UserID} <br />
                        <p className="logindate"> Last Login: {this.state.lastLogin}</p>
                        </Col>
                    </Row>
                    <Row className="borderbottom">
                        <h4 className="accountBalance">Account Balance: {this.state.accountBalance}</h4>
                        <Table>
                            <thead>
                                <tr><th>Date</th><th>Description</th> <th>Amount</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>1</td><td>1</td><td>1</td></tr>
                                <tr><td>1</td><td>1</td><td>1</td></tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row><Dashboardform /></Row>
                </Container>  
            </div>
        )
    }
}
export default Dashboarddetails
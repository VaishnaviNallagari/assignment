import React, { Component } from 'react'
import { Figure, Table }from 'react-bootstrap'
import FigureCaption from 'react-bootstrap/FigureCaption'
import { Container, Row, Col } from 'reactstrap';
import Colorchange from './Colorchange'

export default class Aboutdetails extends Component {
    render() {
        return (
            
        <div className="box">
            <Container>
                <Row className="about">About iJavaScrip</Row>
                <Row style={{marginTop:20}}>
                <Col xl={4}>
                        <Figure>
                        <Figure.Image style={{height:126}} className="userimage1" src="logo.svg/171x180"/> </Figure>
                </Col >
                    <Col xl={8}><p>Interesting, stimulating and engaging courses, interactive interfaces and 
                    achievements are everything you need to learn with pleasure. </p><p>And of course, 
                    there’s our instructor Muffin. You won’t get bored.Interesting, stimulating and engaging courses.</p> </Col>  
                 </Row>  
                 <Row><h4>Re-usable Component</h4></Row>
                 <Row>
                    <Colorchange />
                     <Colorchange />
                </Row>
            </Container>
                  </div> 
        )    
           
        }   
}

import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class header extends React.Component {
  state= {title:"React JS"}
  render(){

    return ( 
      <div>
          <Container>
              <Row>
              <Col className="col-lg-3">
                <div className="js-framework">{this.state.title}</div>
                <div className="heading">IJavaScript</div>
              </Col>
              <Col className="col-lg-9">
                  <div className="top-banner"></div>
                  <div className="login-box"></div>
              </Col>
              </Row>
          </Container>  
  </div>)
  }

};
 
export default header
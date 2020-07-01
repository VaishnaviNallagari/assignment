import React from 'react'
import { Container, Row, Col } from 'reactstrap';
class dashboardform extends React.Component{
  constructor(){
    super()
    this.state ={ 
      SMS: false,
      MarcketingNewsletter: false,
      Flyers: false,
      twowaybind: ""
    }
    this.handleevent = this.handleevent.bind(this)
    
  }
  handleevent(event){
    const{name, value, checked, type} = event.target
    type === "checkbox" ?this.setState({[name] : checked}) : this.setState({
     [name]: value
    })
  }
 
  render(){
    return(
        <div className="dashboardformwidth">
            <Container>
            <Row>
                <Col lg={5}>
                <h4>Subscribe to Alerts</h4>
                 <form onSubmit={this.onSubmit} className="formstyles">
                <label><input type="checkbox" name="SMS" checked={this.state.checkedornot} onChange={this.handleevent}></input> SMS Alert</label><br/>     
                <label><input type="checkbox" name="MarcketingNewsletter" checked={this.state.checkedornot} onChange={this.handleevent}></input> Marcketting Newsletter</label><br/>       
                <label><input type="checkbox" name="Flyers" checked={this.state.checkedornot} onChange={this.handleevent}></input> Flyers</label>   <br/>       
                <input type="submit" className="buttonproperties" value="Submit"/> 
                </form>
                </Col>
                <Col lg={7}>
                <h4>Two Way Data Binding </h4>
                <form className="formstyles">
                <input type="text" name="twowaybind" value={this.state.twowaybind} placeholder="Enter value for two way binding" style={{width:400}} onChange={this.handleevent}></input>
                </form>
                </Col>
            </Row>
            </Container>
        </div>
      
    )
  }
}


export default dashboardform;

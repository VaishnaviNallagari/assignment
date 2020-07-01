import React, { Component } from 'react'

class Colorchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bgColor: "#FFFF00",
          height: "150px",
          width: "150px",
          
        }
      }
    
    
      boxClick = (e) => {
        this.setState({
          bgColor: "#FF0000",
          height: "150px",
          width: "150px"
        })
      }
    
    render() {
        return (
            <div>
                 <div className="App">
                    <article className='experimentsHolder'>
                    <div className="boxClickCss" 
                    style={{backgroundColor: this.state.bgColor, height: this.state.height, width: this.state.width}}
                    onClick={this.boxClick}></div>
                    </article>
                </div>
            </div>
        )
    }
}

export default Colorchange
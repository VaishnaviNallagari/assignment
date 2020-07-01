import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../reduxandstore/reducer'
import { Redirect } from 'react-router-dom'

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
                email: "",
                password:""
        };
    }

      onSubmit = (e) => {
          e.preventDefault();
          let {email, password} = this.state;
          this.props.login(email, password)
      }
      validate = (event) => {   
        let Error= "";
        if(this.state.email.includes('@') || this.state.email.length <=8 || this.state.email.length >20
        || this.state.password.length <=8 || this.state.password.length > 20 ){
          
            Error= "Error: Invalid User Credentials"
        }
        
        if(Error) {
          return false;
        }
        else{
          this.setState({isAuthenticated: true})
          return false;
        }
       return true;
      }
    render() {
            let {email,password} =this.state;
            let {isLoginPeanding, isLoginSuccess, isLoginError} = this.props;
            if(isLoginSuccess){
                return <Redirect to="/dashboard"/>
              }
        return (
            
            <div className="login-form container Container">
                
                    {isLoginPeanding && <div>Please Wait...</div>}
                    <div style={{padding:60}}>   
                    <div style={{height:40,width:300}}>{isLoginError && <div style={{height:'50px',width:'57vw',backgroundColor:'#c57567',paddingLeft:40,paddingTop:12 }}>{isLoginError.message}</div> }</div> 
                   <form onSubmit={this.onSubmit} style={{padding:30}}>
                   <label className="userID_label">User ID</label> 
                   <input className="userid_field" type="email" name="email" onChange={e => this.setState({email: e.target.value})} placeholder="Enter User ID"/> <br />
                   <label className="password_label ">Password</label> 
                   <input className="password_field" type="password" name="password" onChange={e => this.setState({password: e.target.value})} placeholder="Password"/><br />
                   <input className="loginbutton" type="submit" value="Log in" onClick={this.validate}/> 
                  
                </form>
                    </div>
       
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginPeanding: state.isLoginPeanding,
        isLoginSuccess: state.isLoginSuccess,
        isLoginError: state.isLoginError

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login : (email, password) => dispatch(login(email,password))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
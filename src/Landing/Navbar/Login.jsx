import React, {Component} from 'react';

class Login extends Component {
  render() {
    if (this.props.user == true) {
      return(
        <div className="login-button">
          <button type="button" name="Logout">logout</button>
        </div>
      )
    } else {
      return(
        <div className="login-cont">
          <button className="login-button" name="Login/register">login/register</button>
        </div>
      )
    }
  }
}
export default Login;
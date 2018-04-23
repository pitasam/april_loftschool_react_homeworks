import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state = {
        login: '',
        password: ''
    };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

    handleClick = () => {
      const { authorizeUser } = this.props;

        authorizeUser(this.state.login, this.state.password);
    };

  render() {
    const { isAuthorized } = this.props;
    const formLogin = (
        <div>
          <div>
            <input name="login" onChange={this.handleChange}/>
            <input name="password" onChange={this.handleChange}/>
          </div>
          <button onClick={this.handleClick}>
            Submit
          </button>
        </div>
    );

    return isAuthorized ? <Redirect to="/" /> : formLogin;
  }
}

export default AuthHOC(Login);

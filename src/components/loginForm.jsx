import React, { Component } from "react";


class LoginForm extends Component {
  username = React.createRef();
  
  componentDidMount(){
    console.log(this.username)
    this.username.current.focus();
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.username.current.value;
    console.log("Submitted");
    //call server save chnae
  };
  render() {
    return (
      <div className="">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input ref={this.username} id="username" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

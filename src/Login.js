import React from "react";
import "./Login.css";

class Login extends React.Component {
  state = {
    data: {
      username: this.props.data.username,
      password: this.props.data.password
    }
  };

  handleChange = e => {
    let datax = this.state.data;
    console.log("datax", datax);
    datax[e.target.name] = e.target.value;
    this.setState({
      datax
    });
  };

  submituserRegistrationForm = e => {
    e.preventDefault();
    if (
      this.state.data["username"] === "hirank" &&
      this.state.data["password"] === "hirank123"
    ) {
      alert("Form submitted");
      this.props.admin();
    }
    else{
        alert("wrong username and password");
    }
  };

  render() {
    console.log(this.isadmin);
    console.log(this.props);
    return (
      <div id="register" className="container">
        <h3>Login</h3>
        <form
          method="post"
          name="userRegistrationForm"
          onSubmit={this.submituserRegistrationForm}
        >
          <label>UserName</label>
          <input
            type="text"
            name="username"
          //  value={this.state.data.username}
            onChange={this.handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
           // value={this.state.data.password}
            onChange={this.handleChange}
            required
          />

          <input type="submit" className="submitbutton" value="submit" />
        </form>
      </div>
    );
  }
}

export default Login;

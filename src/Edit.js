import React from "react";
// import data from "./App"
import "./Edit.css";
class Edit extends React.Component {
  state = {
    users: {
      id: this.props.users.id,
      first_name: this.props.users.first_name,
      last_name: this.props.users.last_name,
      email: this.props.users.email,
      gender: this.props.users.gender,
      account: this.props.users.account,
      age: this.props.users.age
    }
  };

  handlechange = event => {
    console.log("edit", this.state);
    const { name, value } = event.target;
    this.setState({
      users: { ...this.state.users, [name]: value }
    });
  };

  handlesubmit = event => {
    event.preventDefault();
    const { name, age } = this.state.users;
    console.log(name);
    console.log(age);

    this.setState({
      users: [
        {
          id: this.state.users.id,
          first_name: this.state.users.first_name,
          last_name: this.state.users.last_name,
          email: this.state.users.email,
          gender: this.state.users.gender,
          account: this.state.users.account,
          age: this.state.users.age
        }
      ]
    });
    console.log(this.state.users);
    this.props.editInData(this.state.users, this.props.i);
  };

  render() {
    console.log(this.props);
    return (
      <form className="container" onSubmit={this.handlesubmit}>
        <h1>Update user</h1>
        <input
          type="number"
          name="id"
         // onChange={this.handlechange}
          value={this.state.users.id}
          required
        />
        <input
          type="text"
          name="first_name"
          onChange={this.handlechange}
          value={this.state.users.first_name}
          required
        />
        <input
          type="text"
          name="last_name"
          onChange={this.handlechange}
          value={this.state.users.last_name}
          required
        />
        <input
          type="email"
          name="email"
          onChange={this.handlechange}
          value={this.state.users.email}
          required
        />
        <input
          type="text"
          name="gender"
          onChange={this.handlechange}
          value={this.state.users.gender}
          required
        />
        <input
          type="text"
          name="account"
          onChange={this.handlechange}
          value={this.state.users.account}
          required
        />

        <input
          type="number"
          onChange={this.handlechange}
          value={this.state.users.age}
          name="age"
          required
        />
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Edit;

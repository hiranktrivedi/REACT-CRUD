import React from "react";
import "./Add.css";
class Add extends React.Component {
  state = {
    temp: {
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      account: "",
      age: ""
    }
  };

  onChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({
      temp: {
        ...this.state.temp,
        [name]: value
      }
    });
    console.log(this.state.temp);
  };
  OnSubmitHandler = () => {
    console.log(this.state.temp);
    this.props.onAdd(this.state.temp);
  };
  render() {
    return (
      <div class="container">
        <h1> Add employee </h1>{" "}
        <input
          type="number"
          name="id"
          onChange={this.onChangeHandler}
          placeholder="enter ID"
          required
        />{" "}
        <input
          type="text"
          name="first_name"
          onChange={this.onChangeHandler}
          placeholder="enter first name"
          required
        />{" "}
        <input
          type="text"
          name="last_name"
          onChange={this.onChangeHandler}
          placeholder="enter last name"
          required
        />{" "}
        <input
          type="email"
          name="email"
          onChange={this.onChangeHandler}
          placeholder="enter email"
          required
        />{" "}
        <input
          type="text"
          name="gender"
          onChange={this.onChangeHandler}
          placeholder="enter gender"
          required
        />{" "}
        <input
          type="text"
          name="account"
          onChange={this.onChangeHandler}
          placeholder="enter account"
          required
        />{" "}
        <input
          type="number"
          name="age"
          onChange={this.onChangeHandler}
          placeholder="enter age"
          required
        />{" "}
        <button onClick={this.OnSubmitHandler}> Submit </button>{" "}
      </div>
    );
  }
}
export default Add;

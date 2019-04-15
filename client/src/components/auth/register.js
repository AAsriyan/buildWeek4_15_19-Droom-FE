import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions";
import { withRouter } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: ""
    };
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.registerUser(userData, this.props.history);
    console.log(userData);
  };

  render() {
    return (
      <form>
        <div>
          <label htmlFor="">Email</label>
          <input
            name="email"
            component="input"
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.inputChange}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            name="password"
            component="input"
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.inputChange}
          />
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <input
            name="password2"
            component="input"
            type="password"
            placeholder="confirm password"
            value={this.state.password2}
            onChange={this.inputChange}
          />
        </div>
        <button type="submit" onClick={this.handleSubmit}>
          Sign Up
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

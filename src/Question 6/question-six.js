import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


class QuestionSix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      message: "",
      errors: {}
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // Registration form validation
  validateRegistration = () => {
    let errors = {};
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    } = this.state;

    if (firstName.trim() === "") {
      errors.firstName = "First name is required";
    }
    if (lastName.trim() === "") {
      errors.lastName = "Last name is required";
    }
    if (email.trim() === "") {
      errors.email = "Email is required";
    } else {
      const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!email.match(regex)) {
        errors.email = "Email is invalid";
      }
    }
    if (password.trim() === "") {
      errors.password = "Password is required";
    } else {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!password.match(regex)) {
        errors.password =
          "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character";
      }
    }
    if (confirmPassword.trim() !== password.trim()) {
      errors.confirmPassword = "Passwords must match";
    }

    return errors;
  };

  handleRegistrationSubmit = e => {
    e.preventDefault();

    const errors = this.validateRegistration();

    if (Object.keys(errors).length === 0) {
      alert("Registration successful!");
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } else {
      this.setState({
        errors
      });
    }
  };

  // Contact form validation
  validateContact = () => {
    let errors = {};
    const { name, email, message } = this.state;

    if (name.trim() === "") {
      errors.name = "Name is required";
    }
    if (email.trim() === "") {
      errors.email = "Email is required";
    } else {
      const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!email.match(regex)) {
        errors.email = "Email is invalid";
      }
    }
    if (message.trim() === "") {
      errors.message = "Message is required";
    } else {
      if (message.length < 10) {
        errors.message = "Message must be at least 10 characters long";
      }
    }

    return errors;
  };

  handleContactSubmit = e => {
    e.preventDefault();

    const errors = this.validateContact();

    if (Object.keys(errors).length === 0) {
      alert("Message sent!");
      this.setState({
        name: "",
        email: "",
        message: ""
      });
    } else {
      this.setState({
        errors
      });
    }
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      name,
      message,
      errors
    } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <Route
            exact
            path="/"
            render={() => <h1>Hello World! This is Oyinkansola Shoroye!</h1>}
          />
          <Route
            path="/register"
            render={() => (
              <div>
                <h2>Register</h2>
                <form onSubmit={this.handleRegistrationSubmit}>
                  <label>
                    First Name
                    <input
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={this.handleChange}
                    />
                    {errors.firstName && (
                      <span className="error">{errors.firstName}</span>
                    )}
                  </label>
                  <label>
                    Last Name
                    <input
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={this.handleChange}
                    />
                    {errors.lastName && (
                      <span className="error">{errors.lastName}</span>
                    )}
                  </label>
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                    {errors.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </label>
                  <label>
                    Password
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                    {errors.password && (
                      <span className="error">{errors.password}</span>
                    )}
                  </label>
                  <label>
                    Confirm Password
                    <input
                      type="password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={this.handleChange}
                    />
                    {errors.confirmPassword && (
                      <span className="error">{errors.confirmPassword}</span>
                    )}
                  </label>
                  <button type="submit">Submit</button>
                </form>
              </div>
            )}
          />
          <Route
            path="/contact"
            render={() => (
              <div>
                <h2>Contact</h2>
                <form onSubmit={this.handleContactSubmit}>
                  <label>
                    Name
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                    />
                    {errors.name && (
                      <span className="error">{errors.name}</span>
                    )}
                  </label>
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                    {errors.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </label>
                  <label>
                    Message
                    <textarea
                      name="message"
                      value={message}
                      onChange={this.handleChange}
                    />
                    {errors.message && (
                      <span className="error">{errors.message}</span>
                    )}
                  </label>
                  <button type="submit">Submit</button>
                </form>
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default QuestionSix;

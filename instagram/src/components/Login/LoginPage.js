import React from "react" 

class LoginPage extends React.Component {
  constructor () {
    super ();
    this.state = {
      usernameInput: "",
      passwordInput: "",
    }
  };

  login = event => {
    event.preventDefault();
    localStorage.setItem("username", this.state.usernameInput);
    window.location.reload()
  }



  // toggle = e => {
  //   e.preventDefault();
  //   if (localStorage.getItem("showFirst")) {
  //     localStorage.removeItem("showFirst");
  //     this.setState({
  //       showFirst: false
  //     });
  //   } else {
  //     localStorage.setItem("showFirst", true);
  //     this.setState({
  //       showFirst: true
  //     });
  //   }
  // };

  // onUsernameInput = (event) => {
  //   this.setState({
  //     usernameInput: event.target.value,
  //   })
  // };

  // onPasswordInput = (event) => {
  //   this.setState({
  //     passwordInput: event.target.value,
  //   })
  // };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render(){
  return (
      <form onSubmit={this.login}>
        <input 
          name="usernameInput"
          type="text" 
          placeholder="username"
          onChange={this.handleInputChange}
          value={this.state.usernameInput}
        />
        <input 
          name="passwordInput"
          type="text" 
          placeholder="password"
          onChange={this.handleInputChange}
          value={this.state.passwordInput}
        />
        <button onClick = {this.login}>
          Login
        </button>
      </form>
    )
  }
}

export default LoginPage
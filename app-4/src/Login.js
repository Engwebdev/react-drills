import React from "react";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        }
       this.logToConsole = this.logToConsole.bind(this);
    }

    changeUserName(name) {
        this.setState({ username: name })
    }
    changePassword(password) {
        this.setState({ password: password })
    }
    logToConsole() {
        console.log(`User Name: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>
            <input onChange={ (e) => this.changeUserName( e.target.value ) } type="text"/>
             <input onChange={ (e) => this.changePassword( e.target.value ) } type="password"/>    
            <button onClick={ this.logToConsole } >Login</button>
            </div>
        );
    }
}
export default Login;

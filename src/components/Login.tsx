import React, { Component } from 'react';

type Props = {

}

type State = {
    username: string
    password: string
}

class Login extends Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsernameChange = (event: React.FormEvent<HTMLInputElement>): void => {
        this.setState({
            username: event.currentTarget.value
        });
    }

    handlePasswordChange = (event: React.FormEvent<HTMLInputElement>): void => {
        this.setState({
            password: event.currentTarget.value
        });
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        alert("hello "+ this.state.username);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
                    <label>Password</label>
                    <input type='text' value={this.state.password} onChange={this.handlePasswordChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;
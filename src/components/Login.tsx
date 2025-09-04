import React, { Component } from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';

type Props = RouteComponentProps & {}

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

    handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        try {
            const response = await axios.get("http://localhost:3030/server/api/v1/login", {
                headers: {
                    'content-type': 'application/json'
                }
            });

            // For now, just treat any 200 as success and store minimal user info
            if (response && response.status === 200) {
                // naive user object
                const user = { username: this.state.username };
                // Since this is a class component, we cannot use hooks directly.
                // We'll dispatch a custom event that AuthProvider can listen to, or navigate home.
                // Simpler: store in sessionStorage for now; AuthProvider can be extended to read this.
                sessionStorage.setItem('user', JSON.stringify(user));
                // Navigate to home
                this.props.history.push('/');
            }
        } catch (e) {
            console.error(e);
            alert('Login failed');
        }
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
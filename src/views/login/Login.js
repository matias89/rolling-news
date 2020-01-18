import React, { Component } from 'react';
import InputElement from '../../components/input/InputElement';
import Button from '../../components/button/Button';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            userName: '',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(event) {
        const { target: { value, id } } = event;
        this.setState({
            [id]: value

        })
    }
    render() {
        return (
            <div>
                <form>                   
                    <div className="form-group">
                        <InputElement
                            value={this.state.userName}
                            label="User"
                            placeholder="UserName" 
                            type="text" 
                            id="userName"
                            handleOnChange={this.handleOnChange}
                        />      
                    </div>
                    <div className="form-group">
                        <InputElement
                            value={this.state.password}
                            label="Password"
                            placeholder="Password" 
                            type="password" 
                            id="password"
                            handleOnChange={this.handleOnChange}
                        />      
                    </div>
                    <div className="form-group form-check">
                        <Button
                            id="1"
                            text="Login"
                            type="submit"
                            size="md"
                            color="primary" 
                            onClick = {() => {console.log("Login")}}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
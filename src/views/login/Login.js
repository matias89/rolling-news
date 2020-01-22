import React, { Component } from 'react';
import InputElement from '../../components/input/InputElement';
import Button from '../../components/button/Button';
import { get } from '../../utils/services';
import '../login/login.css';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            userName: '',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        
    }
    handleOnChange(event) {
        const { target: { value, id } } = event;
        this.setState({
            [id]: value
        })
    }
    handleOnSubmit(event) {
        event.preventDefault();
        const { userName, password } = this.state;
        if (userName === '' || password === '') {
            alert('Los datos de acceso son requeridos');
        } else {
            get('http://localhost:3000/users');
        }
    }
    render() {
        return (
            <div className= "login-page rounded border">
                <form className="register-form" onSubmit={this.handleOnSubmit}>                    
                    <div className="form-group">
                        <InputElement
                            value={this.state.userName}
                            placeholder="UserName" 
                            type="text" 
                            id="userName"
                            handleOnChange={this.handleOnChange}
                        />      
                    </div>
                    <div className="form-group">
                        <InputElement
                            value={this.state.password}
                            placeholder="Password" 
                            type="password" 
                            id="password"
                            handleOnChange={this.handleOnChange}
                        />      
                    </div>
                    <div className="button-center">
                    <Button
                        id="1"
                        text="Login"
                        type="submit"
                        size="md"
                        color="primary"
                    />
                    <p className="message">Not registered? <a href="#">Create an account</a></p>
                    </div>    
                </form>
            </div>
        );
    }
}
$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });
export default Login;
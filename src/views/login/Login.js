import React, { Component } from 'react';
import InputElement from '../../components/input/InputElement';
import Button from '../../components/button/Button';

class Login extends Component {
    render() {
        return (
            <div>
                <form>                   
                    <div className="form-group">
                        <InputElement
                            label="User"
                            placeholder="UserName" 
                            type="text" 
                            id="user"
                            onLeft
                        />      
                    </div>
                    <div className="form-group">
                        <InputElement
                            label="Password"
                            placeholder="Password" 
                            type="text" 
                            id="password"
                            onLeft
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
                            icon=""
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
import React from 'react';
import Date from '../date/Date';
import Button from '../button/Button';
import Logo from '../../images/rolling.png'


class Header extends React.Component {
  render () {
    const logo = React.createElement ('img', {className:'', src:'../../images/rolling.png'})
    return (
      <header className ="header fixed-top bg-warning">
        <div>
          <img className ="imglogo" src={Logo}/>
        </div>
        <div className="p-2 d-flex fixed-top justify-content-xl-end">
         <Date />
        </div>
        <div className ="d-flex justify-content-xl-end">
          <Button
          id="1"
          text="LogIn"
          type="submit"
          size="md"
          color="success"
          />
          <Button 
            id="2"
            text="LogOut"
            type="submit"
            size="md"
            color="danger"
          />
        </div>

    </header>
    );
  }
}

export default Header;

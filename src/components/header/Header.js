import React from 'react';
import Date from '../date/Date';
import Button from '../button/Button'

function Header() {
const logo = React.createElement ('img', {className:'', src:'./images/rolling.png'})
  return (
    <header className ="container d-flex flex-column flex-md-row justify-content-between">
      {logo}
      <Date />
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

    </header>
  );
};

export default Header;
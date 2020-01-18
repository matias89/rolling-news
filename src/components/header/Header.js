import React from 'react';
import Date from '../date/Date';
import Button from '../button/Button';
import Logo from '../../images/rolling.png';
import Icon from '../icon/Icon'
import Nav from '../navbar/Navbar'
import Navbar from '../navbar/Navbar';


class Header extends React.Component {
  render () {
    const logo = React.createElement ('img', {className:'', src:'../../images/rolling.png'})
    return (
      <header className ="fixed-top bg-dark">
        <div>
          <img className ="imglogo" src={Logo}/>
        </div>
        <div className ="justify-content-xl-start">
          <Navbar
            items={ [ 
              {
                  title: 'Home', 
                  path: '/home'
              }, 
              {
                  id: 1,
                  title: 'Articles', 
                  path: '/articles'
              },
              {
                  id: 2,
                  title: 'Detail', 
                  path: '/detail'
              },
              {
                  id: 3,
                  title: 'Login', 
                  path: '/login'
              }
          ]}
          />
        </div>
        <div className="p-2 d-flex fixed-top justify-content-xl-end">
         <Date />
        </div>
        <div className ="d-flex justify-content-xl-end">
          <a href="https://www.facebook.com" target="_blank">
          <Icon
            name="facebook" 
            size="2x" 
            color="#3b5998"
          />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <Icon
              name="twitter"
              size="2x"
              color="#00acee"
            />
          </a>
          <a href="https://www.instagram.com" target="_blank">
          <Icon
            name="instagram"
            size="2x"
            color="#e95058"
          />
          </a>
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

import React from 'react';
import Date from '../date/Date';
import Button from '../button/Button';
import Logo from '../../images/rolling.png';
import Icon from '../icon/Icon';
import Navbar from '../navbar/Navbar';


class Header extends React.Component {
  constructor(props){
    super(props);
    this.Logged = this.Logged.bind(this);
    this.ViewAdmin = this.ViewAdmin.bind(this);
    
  }
  Logged(isLoggedIn) {
    if (isLoggedIn) {
        return (
        <>
        <h4>
          Username
        </h4>
        <Button 
          id="2"
          text="LogOut"
          type="submit"
          size="md"
          color="danger"
      />
      </>);
    }
    return <Button
    id="1"
    text="LogIn"
    type="submit"
    size="md"
    color="light"
    /> ;
}
  ViewAdmin(admin){
    if(admin){
      return <div>
         <div className="d-flex justify-content-between">
          <div>
            <img className ="imglogo m-2" src={Logo}/>
          </div>
          
          <div className="p-2">
          <Date />
          </div>
          <div className ="mt-1">
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
          <div>
            {this.Logged(false)}
          </div>
        </div>
         <div className ="">
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
      </div>
    }
    return(
    <div>      
      <div className="d-flex justify-content-between">
        <img className ="imglogo m-2" src={Logo}/>
        {this.Logged(true)}
      </div>
    </div>);
  }

  render () {
    const logo = React.createElement ('img', {className:'', src:'../../images/rolling.png'})
    return (
      <header className ="bg-dark">
        {this.ViewAdmin(true)}       
    </header>
    
    );
  }
}

export default Header;

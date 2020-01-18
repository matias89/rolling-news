import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render () {
        const { items } = this.props;
        return (
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {items.map(item => {
                            return (
                                <li key={item.id} className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to={item.path}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>                       

        );
    }
};

export default Navbar;
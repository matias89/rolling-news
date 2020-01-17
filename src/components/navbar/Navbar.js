import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render () {
        const { items } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>                       

        );
    }
};

export default Navbar;
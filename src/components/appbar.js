import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';
import App from '../App';

class AppBar extends Component {
    render() {
        return(
            <div>
                <Navbar color="dark" light>
                    <NavbarBrand style={{color: 'white', fontSize: '2.5em'}}>Movies</NavbarBrand>
                </Navbar>
            </div>
        );
    }
}

export default AppBar;
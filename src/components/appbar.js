import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';

class AppBar extends Component {
    render() {
        return(
            <div>
                <Navbar color="dark" light style={{width: '100%'}}>
                    <NavbarBrand style={{color: 'white', fontSize: '2.5em'}}><i className="fas fa-film"></i> Movies</NavbarBrand>
                </Navbar>
            </div>
        );
    }
}

export default AppBar;
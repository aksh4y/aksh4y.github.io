import React from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import Portfolio from '../../types/portfolio';
import { smoothScroll } from '../../utilities';

export const NavMenu: React.FC<Portfolio> = (props) => {
    return (
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <NavLink
                    id="#home"
                    href="#home"
                    onClick={(e: any) => smoothScroll(e, 'home')}
                >
                    {props.menu.home}
                </NavLink>
                <NavLink
                    href="#about"
                    onClick={(e: any) => smoothScroll(e, 'about')}
                >
                    {props.menu.about}
                </NavLink>
                {props.sections.map((section) => (
                    <NavLink
                        key={section.id}
                        href={'#' + section.id}
                        onClick={(e: any) => smoothScroll(e, section.id)}
                    >
                        {section.menu}
                    </NavLink>
                ))}
            </Nav>
        </Navbar.Collapse>
    );
};

export default NavMenu;

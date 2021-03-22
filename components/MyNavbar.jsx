import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
    Navbar,
    Collapse,
    NavbarToggler,
    NavItem,
    NavLink,
    NavbarBrand,
    Nav
} from 'reactstrap';

const StyledNavbar = styled(Navbar)({
    backgroundColor: '#d9b3ff',
    paddingTop: '0px',
    paddingBottom: '0px',
    paddingLeft: '0px',
    paddingRight: '0px'
});

const Logo = styled.img({
    height: '50px',
    width: '50px'
});

const NavWords = styled(NavLink)({
    color: 'black',
    '&:hover':
    {
        color: 'white'
    }
});

const MyNavbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <StyledNavbar expand="xl" >
            <NavbarBrand>
                <Logo src="/Images/MyLogo.png"></Logo>
            </NavbarBrand>
            <NavbarToggler onClick={toggle}></NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavWords> About </NavWords>
                    </NavItem>
                    <NavItem>
                        <NavWords> Work Experience </NavWords>
                    </NavItem>
                    <NavItem>
                        <NavWords> Personal Projects </NavWords>
                    </NavItem>
                </Nav>
            </Collapse>
        </StyledNavbar>
    )
};

export default MyNavbar;
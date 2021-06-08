import React from 'react';
import styled from '@emotion/styled';
import {
    Navbar,
    NavItem,
    NavLink,
    NavbarBrand,
    Nav
} from 'reactstrap';

const StyledNavbar = styled(Navbar)({
    backgroundColor: '#ccb3ff',
    paddingTop: '0px',
    paddingBottom: '0px',
    paddingLeft: '40px',
    paddingRight: '0px',
    width: '12.625rem',
    height: '100vh',
    display: 'block'
});

const Logo = styled.img({
    height: '150px',
    width: '150px',
});

const NavWords = styled(NavLink)({
    color: 'black',
    transition: '0.5s',
    position: 'relative',
    '&:hover':
    {
        cursor: 'pointer',
        paddingRight: '20px',
        paddingLeft: '15px',
        color: 'white'
    },
    '&:before':
    {
        content: '">"',
        transition: '0.5s',
        position: 'absolute',
        opacity: '0',
        left: '0px',
        color: 'white'
    },
    '&:hover::before': {
        opacity: '1'
    }
});

const MyNavbar = () => {
    return (
        <StyledNavbar >
            <NavbarBrand href='/'>
                <Logo src="/Images/MyLogo.png"></Logo>
            </NavbarBrand>
            <Nav navbar>
                <NavItem>
                    <NavWords href="/about"> About Me</NavWords>
                </NavItem>
                <NavItem>
                    <NavWords href="/experience"> Work Experience </NavWords>
                </NavItem>
                <NavItem>
                    <NavWords href="/projects"> Personal Projects </NavWords>
                </NavItem>
                <NavItem>
                    <NavWords href='/links'> Social Links </NavWords>
                </NavItem>
            </Nav>
        </StyledNavbar>
    )
};

export default MyNavbar;

// Credit to https://codepen.io/konradwax/pen/woPNqJ
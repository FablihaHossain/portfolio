import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import styled from '@emotion/styled';

const StyledNav = styled(Navbar)({
    backgroundImage: 'linear-gradient(#b566ff, #e67300)',
    '@media (min-width: 1355px)': {
        display: 'none'
    }
});

const Logo = styled.img({
    height: '50px',
    width: '50px',
});

const NavWords = styled(NavLink)({
    color: 'black !important',
    transition: '0.5s',
    position: 'relative',
    '&:hover':
    {
        cursor: 'pointer',
        paddingRight: '20px',
        paddingLeft: '15px',
        color: 'white !important'
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

export default function TopNavbar() {
    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => setNavOpen(!navOpen);
    return (
        <div>
            <StyledNav light expand="xl">
                <NavbarBrand href="/">
                    <Logo src="/Images/MyLogo.png"></Logo>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNav} />
                <Collapse isOpen={navOpen} navbar>
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
                </Collapse>
            </StyledNav>
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
    Navbar,
    NavItem,
    NavLink,
    NavbarBrand,
    Nav,
    Collapse,
    Button,
    Row
} from 'reactstrap';
import Links from './Links';

const StyledNavbar = styled(Navbar)((props) => {
    const { sidenavopen } = props;
    return {
        // backgroundImage: 'linear-gradient(#e64d00, #901aff, #e64d00)',
        backgroundImage: 'linear-gradient(#e67300, #b566ff, #ffa64d)',
        paddingTop: '0px',
        paddingBottom: '0px',
        paddingLeft: '40px',
        paddingRight: '0px',
        width: '12.625rem',
        height: '734px',
        display: 'inline-block',
        '@media (max-width: 1384px)': {
            display: 'none'
        },
        transition: sidenavopen ? 'all 0.5s ease-in' : '0.5s ease-in',
        overflow: 'hidden',
        marginLeft: '0',
        position: 'sticky',
        top: '0'
    }
});

const Logo = styled.img({
    height: '150px',
    width: '150px',
});

const MainNav = styled(Nav)({
    marginBottom: '100px'
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

const NavButton = styled(Button)({
    backgroundImage: 'linear-gradient(#e67300, #b566ff, #ffa64d) !important',
    borderColor: 'transparent !important',
    padding: '0.20rem 0.20rem',
    '&:hover': {
        backgroundColor: '#ffe6cc !important',
        textDecoration: 'none',
        borderColor: 'white !important'
    },
    '@media (max-width: 1384px)': {
        display: 'none'
    },
    position: 'sticky',
    top: '0',
    height: '100vh'
});

const SideNavbar = ({ sideNavOpen, sideToggle }) => {
    return (
        <>
            <Collapse isOpen={sideNavOpen}>
                <StyledNavbar sidenavopen={sideNavOpen}>
                    <NavbarBrand href='/'>
                        <Logo src="/Images/MyLogo.png"></Logo>
                    </NavbarBrand>
                    <MainNav navbar>
                        <NavItem>
                            <NavWords href="/about"> About Me</NavWords>
                        </NavItem>
                        <NavItem>
                            <NavWords href="/experience"> Work Experience </NavWords>
                        </NavItem>
                        <NavItem>
                            <NavWords href="/projects"> Personal Projects </NavWords>
                        </NavItem>
                    </MainNav>
                    <Links
                        isRow={false}
                        circleWidth='50%'
                    ></Links>
                </StyledNavbar>
            </Collapse>
            <NavButton onClick={sideToggle}> {sideNavOpen ? '<<' : '>>'} </NavButton>
        </>
    )
};

export default SideNavbar;

// Credit to https://codepen.io/konradwax/pen/woPNqJ
import React from 'react';
import styled from '@emotion/styled';
import { Row, Jumbotron } from 'reactstrap';
import Links from '../components/Links';

const Header = styled.p({
    fontFamily: 'Mr Dafoe, cursive',
    fontSize: '100px',
    textAlign: 'center'
});

const Jumbo = styled(Jumbotron)({
    backgroundColor: 'transparent',
    padding: '0px',
    alignItems: 'center'
});
export default function About() {
    return (
        <>
            <Header>
                About Me
            </Header>
            <p> I am a graduate from Adelphi University seeking a career in Software Engineering. I have substantial knowledge in Java and Python programming. I also have experience in ReactJS, Python Flask web framework, HTML & Javascript for front-end development, and PSQL & MongoDB for back-end development.
                My Github Profile, https://github.com/FablihaHossain, has projects that I've worked on that sharpened my skills as an overall developer.</p>
            <br></br>
            <Jumbo>
                <Links
                    isRow={true}
                    circleWidth="50%"
                ></Links>
            </Jumbo>
        </>
    )
}
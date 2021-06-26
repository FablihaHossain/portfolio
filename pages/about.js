import React from 'react';
import styled from '@emotion/styled';
import { Row, Jumbotron } from 'reactstrap';
import Links from '../components/Links';
import SkillsList from '../components/SkillsList';

const MainHeader = styled.p({
    fontFamily: 'Mr Dafoe, cursive',
    fontSize: '100px',
    textAlign: 'center',
    '@media (max-width: 1000px)': {
        fontSize: '80px'
    }
});

const Jumbo = styled(Jumbotron)({
    backgroundColor: 'transparent',
    padding: '0px',
    justifyContent: 'center'
});

const SubHeader = styled.p({
    fontFamily: 'Mr Dafoe, cursive',
    fontSize: '50px',
    textAlign: 'center'
});

const DetailParagraph = styled.p({
    fontFamily: 'Newsreader, serif',
    fontSize: '20px',
    '@media (max-width: 1000px)': {
        fontSize: '15px'
    }
});

const MyPic = styled.img({
    width: '90px',
    height: '125px',
    borderRadius: '40px',
    marginLeft: '35px'
});

export default function About() {
    // Programming List
    const programmingList = ['Java', 'Python', 'HTML', 'Javascript']

    // Frontend List
    const frontendList = ['Python Flask', 'Django', 'ReactJS']

    // Backend List
    const backendList = ['SQL', 'PostgreSQL', 'MongoDB']

    // Systems List
    const systemsList = ['Git', 'Linux OS', 'MacOS', 'JIRA']

    return (
        <>
            <MainHeader>
                About Me
                {/* <MyPic src="/Images/me1.PNG"></MyPic> */}
                {/* <MyPic src="/Images/me3.JPG"></MyPic> */}
            </MainHeader>
            <DetailParagraph>
                I pursued my undergraduate degree at Adelphi University for computer science. I'm currently seeking a career in Software Engineering. I have
                experience in both Frontend and Backend. I work on personal projects to sharpen my skills as an overall developer. My other hobbies include: reading,
                creative writing, and photography 😊
            </DetailParagraph>
            <br></br>
            <Jumbo>
                <SubHeader> My Skills</SubHeader>
                <SkillsList
                    category="Web Frameworks"
                    list={frontendList}
                ></SkillsList>
                <SkillsList
                    category="Backend Tech"
                    list={backendList}
                ></SkillsList>
                <SkillsList
                    category="Programming"
                    list={programmingList}
                ></SkillsList>
                <SkillsList
                    category="Systems"
                    list={systemsList}
                ></SkillsList>
            </Jumbo>
            <br></br>

            <Links
                isRow={true}
                circleWidth="10%"
            ></Links>

        </>
    )
}
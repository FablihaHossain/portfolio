import React from 'react';
import styled from '@emotion/styled';
import { Jumbotron } from 'reactstrap';
import ExperienceCard from '../components/ExperienceCard';

const Header = styled.p({
    fontFamily: 'Bungee Inline, cursive',
    fontSize: '50px',
    textAlign: 'center'
});

const Jumbo = styled(Jumbotron)({
    backgroundColor: 'transparent',
    paddingTop: '20px'
});


export default function Experience() {
    return (
        <>
            <Header> Work Experience</Header>
            <Jumbo>
                <ExperienceCard
                    job='Epistem Interactive'
                    details="Epistem Interactive is a tech company based in New York. It is a computer science learning
                    platform for students interested in pursuing careers in technology. AI driven tools are utilized to showcase a visual representation of
                    code execution through the use of animations."
                    myRole="I am currently a part of the engineering team that is developing the newest iteration of the company site"
                    duration='2020 - present'
                    skills="ReactJS, Emotion CSS, AWS Amplify"
                ></ExperienceCard>
                <ExperienceCard
                    job='Computer Science Teaching Assistant'
                    details="The Math and Computer Science department of the university recruits student workers to assist professors with their course work and other specific tasks"
                    myRole="The department offers three different roles: Lab Assistant, Tutor, and Grader. Over the course of a year and a half, I was able to partake in all of them."
                    duration='2019 - 2020'
                    skills="Communication, Leadership, Time Management"
                ></ExperienceCard>
                <ExperienceCard
                    job='Adelphi University IT Help Desk Assistant'
                    details="The Help Desk can be described as the first stop a person goes to when need technical assistance with their Adelphi accounts, computers, printers, etc. We troubleshoot 
                    and determine how to go about resolving the specific issue."
                    myRole="As a help desk assistant and lab consultant, I would assist customers over the phone and/or face to face. We used a work order system to keep track of all situations
                    and to keep organized."
                    duration='2018 - 2020'
                    skills="Adaptability, Customer Service, Team Working, Problem Solving"
                ></ExperienceCard>
            </Jumbo>
        </>
    )
}
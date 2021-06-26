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
                    platform for students interested in pursuing careers in technology. It utilizes AI driven tools to showcase a visual representation of
                    code execution through the use of animations."
                    myRole="I am currently a part of the engineering team that is working on the newest iteration of the company site"
                    duration='2020-present'
                    skills="ReactJS, Emotion CSS, AWS Amplify"
                ></ExperienceCard>
                <ExperienceCard
                    job='Computer Science Teaching Assistant'
                    details="The math and computer science department to assist professors and students in the ciriculum"
                    myRole="The department offers three different roles, Lab Assistant, Tutor, and Grader. I was able to partake in all of them
                    over the course of one and half years."
                    duration='2018-2020'
                    skills="Problem Solving, Leadership, Time Management"
                ></ExperienceCard>
                <ExperienceCard
                    job='Adelphi University IT Help Desk Assistant'
                    details="Help Desk can be described as the first stop a person goes to that needs assistance.
                    We would troubleshoot and determine how to go about resolving the issue."
                    myRole="I was a help desk assistant and lab consultant. Both were crucial roles, where one would assist customers face to face while the 
                    other consulted with them over the phone."
                    duration='2018-2020'
                    skills="Adaptability, Communication, Customer Service, Team Working"
                ></ExperienceCard>
            </Jumbo>
        </>
    )
}
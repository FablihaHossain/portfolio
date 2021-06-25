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
                    job={'Epistem Interactive'}
                    details={'blah'}
                    duration={'2020-present'}
                ></ExperienceCard>
                <ExperienceCard
                    job={'Adelphi University IT Help Desk'}
                    details={'blah blah'}
                    duration={'2018-2020'}
                ></ExperienceCard>
                <ExperienceCard
                    job={'Math and Computer Science Teaching Assistant'}
                    details={'blah blah blah'}
                    duration={'2018-2020'}
                ></ExperienceCard>
            </Jumbo>
        </>
    )
}
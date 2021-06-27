import React from 'react';
import styled from '@emotion/styled';
import { Card, CardBody, CardTitle, CardFooter } from 'reactstrap';

const StyledCard = styled(Card)({
    marginBottom: '20px',
    backgroundColor: '#ffccff',
    boxShadow: '8px 28px 50px rgba(39,44,49,.07), 1px 6px 12px rgba(39,44,49,.10)',
    transition: 'all .5s ease',
    '&:hover': {
        transform: 'translate3D(0, -1px, 0) scale(1.03)',
        boxShadow: '5px 10px 44px #26004d, -5px -10px 44px #ff8080',
        transition: 'all .4s ease',
    }
});

const WorkTitle = styled(CardTitle)({
    textAlign: 'left',
    fontSize: '23px',
    marginBottom: '0px',
    fontFamily: 'Newsreader, serif'
});

const StyledBody = styled(CardBody)({
    paddingBottom: '0.50rem'
});

const Description = styled.p({
    fontSize: '16px',
    padding: '0.50rem',
    fontFamily: 'Newsreader, serif'
});

const StyledFooter = styled(CardFooter)({
    color: '#6c757d',
    padding: '0.75rem 1.25rem',
    backgroundColor: 'transparent',
    textAlign: 'left'
});

const TheDurationText = styled.span({
    color: '#6c757d'
});

const Header = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '20px',
    paddingRight: '20px'
});

const ExperienceCard = ({ job, details, myRole, duration, skills }) => {
    return (
        <>
            <StyledCard>
                <WorkTitle>
                    <Header>
                        <span><b>{job}</b></span>
                        <TheDurationText>{duration}</TheDurationText>
                    </Header>
                </WorkTitle>
                <StyledBody>
                    <Description>
                        <i>Main Overview:</i> {details}
                        <br></br><br></br>
                        <i>My role:</i> {myRole}
                    </Description>
                </StyledBody>
                <StyledFooter>
                    Main Skills: {skills}
                </StyledFooter>
            </StyledCard>
        </>
    )
}

export default ExperienceCard;
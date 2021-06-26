import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Card, CardBody, CardTitle, CardText, CardImg, CardFooter } from 'reactstrap';

const MyCard = styled(Card)((props) => {
    const { updatecard } = props;
    return {
        height: updatecard ? '275px' : '350px',
        width: updatecard ? '275px' : '350px',
        display: 'flex',
        marginBottom: '250px !important',
        boxShadow: '5px 10px 44px #26004d, -5px -10px 44px #ff8080',
        transition: 'all .5s ease',
        '&:hover': {
            transform: 'translate3D(0, -1px, 0) scale(1.03)',
            boxShadow: '8px 28px 50px rgba(39,44,49,.07), 1px 6px 12px rgba(39,44,49,.10)',
            transition: 'all .4s ease',
        },
        '@media (max-width: 1000px)': {
            width: '400px',
            height: '300px'
        }
    }
});

const TheBody = styled(CardBody)({
    backgroundColor: '#ffd9b3',
    minHeight: '200px'
});

const LogoImage = styled(CardImg)({
    width: '100%',
    height: '100%'
});

const ProjectTitle = styled(CardTitle)({
    color: '#b366ff',
    textAlign: 'center',
    fontFamily: 'Newsreader, serif'
});

const TextContainer = styled(CardText)({
    height: 'calc(100% - 75px)',
    fontFamily: 'Newsreader, serif',
    fontSize: '16px'
});

const TheFooter = styled(CardFooter)({
    textAlign: 'center',
    backgroundColor: 'transparent',
})

const ProjectCard = ({ title, logo, description, github, sidenavopen }) => {
    return (
        <MyCard updatecard={sidenavopen}>
            <LogoImage top src={logo}></LogoImage>
            <TheBody>
                <ProjectTitle tag="h5"><b>{title}</b></ProjectTitle>
                <TextContainer tag="h6"> <b>Description:</b> {description}</TextContainer>
                <TheFooter>
                    <a href={github}> Check Out Project</a>
                </TheFooter>
            </TheBody>
        </MyCard>
    )
};

export default ProjectCard;

// Credit to https://codepen.io/ngthuongdoan/pen/wvWvbbj
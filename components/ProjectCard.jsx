import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Card, CardBody, CardTitle, CardText, CardImg, CardFooter } from 'reactstrap';

const MyCard = styled(Card)((props) => {
    const { updatecard } = props;
    return {
        height: updatecard ? '275px' : '375px',
        width: updatecard ? '275px' : '375px',
        display: 'flex',
        marginBottom: '170px !important'
    }
});

const TheBody = styled(CardBody)({
    backgroundColor: '#ffccb3',
    minHeight: '150px'
});

const LogoImage = styled(CardImg)({
    width: '100%',
    height: '100%'
});

const ProjectTitle = styled(CardTitle)({
    color: '#b366ff',
    textAlign: 'center'
});

const TextContainer = styled(CardText)({
    height: 'calc(100% - 75px)'
});

const TheFooter = styled(CardFooter)({
    textAlign: 'center',
    backgroundColor: 'transparent',
})

const ProjectCard = ({ title, logo, description, github, sidenavopen }) => {
    const [changeCard, setChangeCard] = useState(sidenavopen)
    // const changeCardToggle = () => setChangeCard(sidenavopen)

    // console.log('sidenavopen', sidenavopen)
    // useEffect(() => {
    //     if (changeCard !== sidenavopen) {
    //         setChangeCard(sidenavopen)
    //     }
    // }, [sidenavopen])
    // console.log('changeCard', changeCard)
    return (
        <MyCard updatecard={sidenavopen}>
            <LogoImage top src={logo}></LogoImage>
            <TheBody>
                <ProjectTitle tag="h5"><i>{title}</i></ProjectTitle>
                <TextContainer tag="h6"> <b>Description:</b> {description}</TextContainer>
                <TheFooter>
                    <a href={github}> Check Out Project</a>
                </TheFooter>
            </TheBody>
        </MyCard>
    )
};

export default ProjectCard;
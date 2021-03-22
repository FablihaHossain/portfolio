import React from 'react';
import styled from '@emotion/styled';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const MyCard = styled(Card)({
    height: '300px',
    width: '300px'
});

const TheBody = styled(CardBody)({
    backgroundColor: 'skyblue'
});

const ProjectCard = ({ title, logo, description, github }) => {
    return (
        <MyCard>
            <CardImg top src={logo} width='100%'></CardImg>
            <TheBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardText tag="h6">{description}</CardText>
                <CardText>
                    <a href={github}> Project Link</a>
                </CardText>
            </TheBody>
        </MyCard>
    )
};

export default ProjectCard;
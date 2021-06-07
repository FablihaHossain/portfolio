import React from 'react';
import styled from '@emotion/styled'
import ProjectCard from '../components/ProjectCard'
import { Row } from 'reactstrap'

const ProjectDeck = styled(Row)({
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    padding: '70px'
});

export default function Projects() {
    return (
        <ProjectDeck>
            <ProjectCard
                title="Faveart"
                logo="/Images/FaveartLogo.png"
                github="https://github.com/FablihaHossain/FAVEART-For-OnWords"
                description="senior capstone"
            ></ProjectCard>

            <ProjectCard
                title="Faveart"
                logo="/Images/FaveartLogo.png"
                github="https://github.com/FablihaHossain/FAVEART-For-OnWords"
                description="senior capstone"
            ></ProjectCard>

            <ProjectCard
                title="Faveart"
                logo="/Images/TravelBlogLogo.png"
                github="https://github.com/FablihaHossain/FAVEART-For-OnWords"
                description="senior capstone"
            ></ProjectCard>
        </ProjectDeck>
    )
}
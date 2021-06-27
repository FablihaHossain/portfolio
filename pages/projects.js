import React from 'react';
import styled from '@emotion/styled'
import ProjectCard from '../components/ProjectCard'
import { CardDeck } from 'reactstrap'

const ProjectDeck = styled(CardDeck)({
    '@media (min-width: 1119px)': {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        paddingTop: '40px',
    },
    '@media (max-width: 1000px)': {
        display: 'grid',
        gridTemplateColumns: 'auto',
        paddingTop: '40px',
        justifyContent: 'center'
    },
});

const Header = styled.p({
    fontFamily: 'Bungee Inline, cursive',
    fontSize: '50px',
    textAlign: 'center'
});

export default function Projects({ sideNavOpen }) {
    return (
        <>
            <Header> Personal Projects </Header>
            <ProjectDeck>
                <ProjectCard
                    title="FAVEART For OnWords"
                    logo="/Images/FaveartLogo.png"
                    github="https://github.com/FablihaHossain/FAVEART-For-OnWords"
                    description="My Co-Developed Senior Capstone project that utilizes Augmented Reality"
                    sidenavopen={sideNavOpen}
                ></ProjectCard>

                <ProjectCard
                    title="TahiyaClick"
                    logo="/Images/tahiyaClickLogo.png"
                    github="https://github.com/FablihaHossain/tahiya_click"
                    description="A Photography Site inspired by my cousin"
                    sidenavopen={sideNavOpen}
                ></ProjectCard>

                <ProjectCard
                    title="TravelBlog"
                    logo="/Images/TravelBlogLogo.png"
                    github="https://github.com/FablihaHossain/travel_blog"
                    description="A Blog Site for Travel Enthusiasts"
                    sidenavopen={sideNavOpen}
                ></ProjectCard>
            </ProjectDeck>
        </>
    )
}
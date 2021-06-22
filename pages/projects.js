import React from 'react';
import styled from '@emotion/styled'
import ProjectCard from '../components/ProjectCard'
import { CardDeck } from 'reactstrap'

const ProjectDeck = styled(CardDeck)({
    // display: 'flex',
    // flexDirection: 'column',
    // width: '100%'
    '@media (min-width: 700px)': {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        paddingTop: '80px',
        paddingLeft: '80px'
    },
    '@media (max-width: 699px)': {
        display: 'grid',
        gridTemplateColumns: 'auto',
        paddingTop: '80px',
        paddingLeft: '80px'
    },
});

const RowContainer = styled.div({
    display: 'flex'
})
export default function Projects({ sideNavOpen }) {
    return (
        <>
            <ProjectDeck>

                <ProjectCard
                    title="FAVEART For OnWords"
                    logo="/Images/FaveartLogo.png"
                    github="https://github.com/FablihaHossain/FAVEART-For-OnWords"
                    description="My Senior Capstone"
                    sidenavopen={sideNavOpen}
                ></ProjectCard>

                <ProjectCard
                    title="TahiyaClick"
                    logo=""
                    github="https://github.com/FablihaHossain/tahiya_click"
                    description="A Photography site"
                    sidenavopen={sideNavOpen}
                ></ProjectCard>

                <ProjectCard
                    title="TravelBlog"
                    logo="/Images/TravelBlogLogo.png"
                    github="https://github.com/FablihaHossain/travel_blog"
                    description="practice site"
                    sidenavopen={sideNavOpen}
                ></ProjectCard>

                <ProjectCard
                    title="FAVEART For OnWords"
                    logo="/Images/FaveartLogo.png"
                    github="https://github.com/FablihaHossain/FAVEART-For-OnWords"
                    description="My Senior Capstone"
                    sidenavopen={sideNavOpen}
                ></ProjectCard>

                <ProjectCard
                    title="TahiyaClick"
                    logo=""
                    github="https://github.com/FablihaHossain/FAVEART-For-OnWords"
                    description="A Photography site"
                    sidenavopen={sideNavOpen}
                ></ProjectCard>

                <ProjectCard
                    title="TravelBlog"
                    logo="/Images/TravelBlogLogo.png"
                    github="https://github.com/FablihaHossain/FAVEART-For-OnWords"
                    description="practice site"
                    sidenavopen={sideNavOpen}
                ></ProjectCard>

                <ProjectCard
                    title="FAVEART For OnWords"
                    logo="/Images/FaveartLogo.png"
                    github="https://github.com/FablihaHossain/FAVEART-For-OnWords"
                    description="My Senior Capstone"
                    sidenavopen={sideNavOpen}
                ></ProjectCard>

                <ProjectCard
                    title="TahiyaClick"
                    logo=""
                    github="https://github.com/FablihaHossain/FAVEART-For-OnWords"
                    description="A Photography site"
                    sidenavopen={sideNavOpen}
                ></ProjectCard>

                <ProjectCard
                    title="TravelBlog"
                    logo="/Images/TravelBlogLogo.png"
                    github="https://github.com/FablihaHossain/FAVEART-For-OnWords"
                    description="practice site"
                    sidenavopen={sideNavOpen}
                ></ProjectCard>

            </ProjectDeck>
        </>
    )
}
import React from 'react';
import styled from '@emotion/styled'
import ProjectCard from '../components/ProjectCard'
import { CardDeck } from 'reactstrap'

const ProjectDeck = styled(CardDeck)({
    '@media (min-width: 800px)': {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        paddingTop: '40px',
    },
    '@media (max-width: 799px)': {
        display: 'grid',
        gridTemplateColumns: 'auto',
        paddingTop: '40px',
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

                {/* <ProjectCard
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
                ></ProjectCard> */}


            </ProjectDeck>
        </>
    )
}
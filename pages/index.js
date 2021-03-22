import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyNavbar from '../components/MyNavbar'
import ProjectCard from '../components/ProjectCard'
import { Row } from 'reactstrap';
import styled from '@emotion/styled';

const ProjectDeck = styled(Row)({
  display: 'grid',
  gridTemplateColumns: ' auto auto auto',
  backgroundColor: '#ff884d'
});

export default function Home() {
  return (
    <>
      <MyNavbar></MyNavbar>
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
    </>
  )
}
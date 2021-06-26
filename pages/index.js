import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from '@emotion/styled';
import { Container, Jumbotron } from 'reactstrap';

const HeaderText = styled.p({
  fontFamily: 'Courgette, cursive',
  fontSize: '100px',
  textAlign: 'center',
  '@media (max-width: 1000px)': {
    fontSize: '50px'
  }
});

const SubText = styled.p({
  fontFamily: 'Newsreader, serif',
  fontSize: '30px',
  textAlign: 'center'
});

const MyPic = styled.img({
  width: '150px',
  height: '320px',
  borderRadius: '40px'
});

const TheDashboard = styled.ul({
  display: 'grid',
  alignItems: 'start',
  listStyleType: 'none',
  justifyContent: 'center',
  flexWrap: 'unset'
});

const MenuItem = styled.li({
  padding: '6px 0'
});

const TheLink = styled.a({
  position: 'relative',
  display: 'block',
  textDecoration: 'none',
  transition: '0.5s',
  color: '#ecf0f1',
  textTransform: 'uppercase',
  '&:after': {
    position: 'absolute',
    content: '""',
    top: '100%',
    left: '0',
    width: '100%',
    height: '3px',
    background: '#3498db',
    transform: 'scaleX(0)',
    transformOrigin: 'right',
    transition: 'transform 0.5s'
  },
  '&:hover': {
    color: '#95a5a6',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  '&:hover::after': {
    transform: 'scaleX(1)',
    transformOrigin: 'left',
  },
  fontFamily: 'Bungee Inline, cursive',
  fontSize: '40px'
});

export default function Home() {
  return (
    <>
      <HeaderText> Fabliha Hossain </HeaderText>
      <SubText> Full Stack Software Engineer </SubText>

      {/* <MyPic src="/Images/me1.PNG"></MyPic>
        <MyPic src="/Images/me3.JPG"></MyPic> */}

      <TheDashboard>
        <MenuItem>
          <TheLink href="/about"> About Me</TheLink>
        </MenuItem>
        <MenuItem>
          <TheLink href="/experience"> Work Experience</TheLink>
        </MenuItem>
        <MenuItem>
          <TheLink href="/projects"> Personal Projects </TheLink>
        </MenuItem>
      </TheDashboard>
    </>
  )
}

// Credit to https://codepen.io/alphardex/pen/MWWEmLK for the css animation of the underlining menu items
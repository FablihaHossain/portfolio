import React from 'react';
import styled from '@emotion/styled';
import { Jumbotron, Row, Col, } from 'reactstrap';

const HeaderText = styled.p({
  fontFamily: 'Courgette, cursive',
  fontSize: '100px',
  textAlign: 'center',
  '@media (max-width: 1000px)': {
    fontSize: '50px'
  },
  marginBottom: '-10px'
});

const SubText = styled.p({
  fontFamily: 'Newsreader, serif',
  fontSize: '32px',
  textAlign: 'center',
  '@media (max-width: 1000px)': {
    fontSize: '20px'
  }
});

const MyPic = styled.img({
  width: '170px',
  height: '360px',
  borderRadius: '40px',
  '@media (max-width: 700px)': {
    width: '140px',
    height: '250px'
  }
});

const ColoredText = styled.p({
  transition: '0.5s',
  textTransform: 'uppercase',
  background: 'linear-gradient(90deg, #d9b3ff 20%, #ffbb99 40%, #d9b3ff 60%, #ffbb99 80%)',
  backgroundSize: '200% auto',
  animation: 'shine 1s linear infinite',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  '@keyframes shine': {
    'to': {
      backgroundPosition: '200% center'
    }
  },
  fontFamily: 'Bungee Inline, cursive',
  fontSize: '40px',
  '@media (max-width: 700px)': {
    fontSize: '23px'
  }
});

const TheCol = styled(Col)({
  float: 'left',
  padding: '45px',
  '@media (max-width: 700px)': {
    padding: '5px'
  }
});

const Footer = styled.div({
  position: 'fixed',
  textAlign: 'center',
  width: '100%',
  left: '0',
  bottom: '0',
  fontFamily: 'Bungee Inline, cursive',
  fontSize: '20px'
});

const TheRow = styled(Row)({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  justifyContent: 'center',
  flexWrap: 'unset'
});

export default function Home() {
  return (
    <>
      <HeaderText> Fabliha Hossain </HeaderText>
      <SubText> Full Stack Software Engineer </SubText>
      <TheRow>
        <TheCol>
          <MyPic src="/Images/me1.PNG"></MyPic>
        </TheCol>
        <TheCol>
          <ColoredText> Coder</ColoredText>
          <ColoredText> Reader</ColoredText>
          <ColoredText> Writer </ColoredText>
          <ColoredText> Photographer </ColoredText>
          <ColoredText> Daydreamer </ColoredText>
        </TheCol>
      </TheRow>

      <Footer> Click <a href="https://github.com/FablihaHossain/portfolio">Here</a> to see the code to this Portfolio</Footer>

    </>
  )
}

// Credit to https://codepen.io/shshaw/pen/YpERQQ for reference to the text gradient animation
import Head from 'next/head'
import { useState } from 'react'
import styled from '@emotion/styled'
import SideNavbar from '../components/SideNavbar'
import TopNavbar from '../components/TopNavbar'
import { Row, Container } from 'reactstrap'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css/animate.min.css'
import 'animate-hover/css/animate-hover.css'

const MyRow = styled(Row)({
  marginRight: '0px',
  marginLeft: '0px'
});

function MyApp({ Component, pageProps }) {
  // Side Navbar Variables
  const [sideNavOpen, setSideNavOpen] = useState(true);
  const sideToggle = () => setSideNavOpen(!sideNavOpen);

  return (
    <>
      <Head>
        <title>My Portfolio</title>

        {/* Google Fonts:  */}
        <link href="https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Bungee+Inline&family=Mr+Dafoe&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Newsreader&display=swap" rel="stylesheet"></link>
      </Head>
      <TopNavbar></TopNavbar>
      <MyRow>
        <SideNavbar sideNavOpen={sideNavOpen} sideToggle={sideToggle}></SideNavbar>
        <Container>
          <Component {...pageProps} sideNavOpen={sideNavOpen} />
        </Container>
      </MyRow>
    </>
  )
}

export default MyApp

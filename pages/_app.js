import '../styles/globals.css'
import Head from 'next/head'
import { useState } from 'react'
import styled from '@emotion/styled'
import 'bootstrap/dist/css/bootstrap.css'
import SideNavbar from '../components/SideNavbar'
import TopNavbar from '../components/TopNavbar'
import { Row, Container, Collapse, Button } from 'reactstrap'

const MyRow = styled(Row)({
  marginRight: '0px',
  marginLeft: '0px'
});

const MyContainer = styled(Container)({

});

function MyApp({ Component, pageProps }) {
  const [sideNavOpen, setSideNavOpen] = useState(true);
  const sideToggle = () => setSideNavOpen(!sideNavOpen);

  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <TopNavbar></TopNavbar>
      <MyRow>
        <SideNavbar sideNavOpen={sideNavOpen} sideToggle={sideToggle}></SideNavbar>
        <MyContainer>
          <Component {...pageProps} sideNavOpen={sideNavOpen} />
        </MyContainer>
      </MyRow>
    </>
  )
}

export default MyApp

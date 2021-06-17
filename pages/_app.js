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
  marginRight: '0px',
  marginLeft: '0px'
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <TopNavbar></TopNavbar>
      <MyRow>
        <SideNavbar></SideNavbar>
        <MyContainer>
          <Component {...pageProps} />
        </MyContainer>
      </MyRow>
    </>
  )
}

export default MyApp

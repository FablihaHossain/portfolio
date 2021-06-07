import '../styles/globals.css'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import MyNavbar from '../components/MyNavbar'
import { Row, Container } from 'reactstrap'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Row>
        <MyNavbar></MyNavbar>
        <Container>
          <Component {...pageProps} />
        </Container>

      </Row>
    </>
  )
}

export default MyApp

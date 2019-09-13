import React from "react"
import styled from "@emotion/styled"
import Footer from "./Footer"
import LayoutHeader from "./LayoutHeader"
import Navbar from "./navbar"

const Container = styled.section`
  margin: 0px;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  width: 100%;
  background: rgb(250, 250, 250);
`

const Main = styled.div`
  margin: 0px auto;
  max-width: calc(800px - 9rem);
  width: 100%;
  padding: 3rem 4rem;
  min-height: 100vh;
  margin-bottom: 2rem;
`

const Layout = ({ location, title, children }) => {
  return (
    <Container>
      <Navbar />
      <LayoutHeader title={title} />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

export default Layout

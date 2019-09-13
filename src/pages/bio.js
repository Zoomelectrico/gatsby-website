import React from 'react'
import { SEO, Navbar, HomeHeader, Footer } from '../components'
import styled from '@emotion/styled'

const BioInfo = styled.section`
  min-height: 50vh;
`

const Bio = props => {
  return (
    <>
      <SEO title="Jose Roberto Quevedo Gabizon" />
      <Navbar color />
      <HomeHeader />
      <BioInfo />
      <Footer />
    </>
  )
}

export default Bio

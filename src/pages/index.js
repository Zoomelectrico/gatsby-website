import React from 'react'
import {
  SEO,
  Navbar,
  HomeBio,
  HomeHeader,
  // HomeProject,
  Footer,
} from '../components'

const Home = props => {
  return (
    <>
      <SEO title="Jose Roberto Quevedo Gabizon" />
      <Navbar color />
      <HomeHeader />
      <HomeBio />
      {/* <HomeProject /> */}
      <Footer />
    </>
  )
}

export default Home

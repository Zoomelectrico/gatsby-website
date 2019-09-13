import React from 'react'
import { graphql, useStaticQuery /*, Link*/ } from 'gatsby'
import styled from '@emotion/styled'
import Image from 'gatsby-image'

const Container = styled.section`
  max-width: calc(100vw - 7rem);
  min-height: 30vw;
  height: auto;
  padding: 0rem 3rem 4rem 3rem;
  width: 100%;
  display: flex;
`

const PhotoContainer = styled.div`
  margin-top: -1rem;
  padding: 4rem;
  flex: 1;
  display: flex;
`

const Photo = styled(Image)`
  height: 100%;
  width: 100%;
  margin: auto;
  border-radius: 1rem;
  box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.1);
`

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    color: rgba(2, 10, 23);
    font-size: 2.25rem;
    text-align: right;
    margin-bottom: 0px;
  }
  p {
    font-size: 1.15rem;
    letter-spacing: 1px;
    line-height: 1.5;
    text-align: right;
  }
`

// const Button = styled(Link)`
//   background-color: rgb(2, 10, 23);
//   color: #fff;
//   max-width: 100px;
//   overflow: hidden;
//   text-decoration: none;
//   text-align: center;
//   padding: 1rem 1.5rem;
//   border-radius: 0.25rem;
//   box-shadow: 0px 2rem 3rem rgba(0, 0, 0, 0.15);
//   text-transform: uppercase;
//   margin: 0 0 0 auto;
// `

const HomeBio = () => {
  const data = useStaticQuery(graphql`
    query HomeBioQuery {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <TextContainer>
        <h2>Hola!!</h2>
        <p>
          Mi nombre es Jose Roberto Quevedo Gabizon, soy de Valencia, Venezuela.
          Vio en Caracas. Estudie Ingenieria de Sistemas en al Universidad
          Metropolitana con una Beca de Excelencia Academica. Me dedico al
          desarrollo de software me encanta experimentar con nuevas tecnologias
          y trabajar para hacer de este mundo mejor. En la actualidad estoy
          dedicado a trabajar con Node.js, MongoDB, React.js, MySQL, Next.js,
          Gatsby.js, GraphQL y python.
        </p>
        {/* <Button to="/bio">saber mas</Button> */}
      </TextContainer>
      <PhotoContainer>
        <Photo fluid={data.avatar.childImageSharp.fluid} />
      </PhotoContainer>
    </Container>
  )
}

export default HomeBio

import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
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

const Button = styled(Link)`
  background-color: rgb(2, 10, 23);
  color: #fff;
  max-width: 100px;
  overflow: hidden;
  text-decoration: none;
  text-align: center;
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0px 2rem 3rem rgba(0, 0, 0, 0.15);
  text-transform: uppercase;
  margin: 0 0 0 auto;
`

const BioInfo = () => {
  const data = useStaticQuery(graphql`
    query BioInfoQuery {
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
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore aut
          voluptatem, saepe ad unde nobis animi eos rerum distinctio atque?
          Necessitatibus magni hic est exercitationem voluptate nihil in vero
          beatae.
        </p>
      </TextContainer>
      <PhotoContainer>
        <Photo fluid={data.avatar.childImageSharp.fluid} />
      </PhotoContainer>
    </Container>
  )
}

export default BioInfo

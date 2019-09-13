import React from "react"
import styled from "@emotion/styled"

const Container = styled.section`
  max-width: calc(100vw - 7rem);
  width: 100%;
  padding: 4rem 3rem;
  background: rgba(2, 10, 23);
  color: #ffffff;
`

const HomeProject = () => (
  <Container>
    <h1>Project</h1>
  </Container>
)

export default HomeProject

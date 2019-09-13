import React from "react"
import styled from "@emotion/styled"

const Header = styled.header`
  position: relative;
  top: 0px;
  left: 0px;
  height: 60vh;
  width: 100%;
  padding: 0px;
  padding-top: 90px;
  margin: 0px;
  background: #0b345d;
  z-index: 1;
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
  h2 {
    color: white;
    font-size: 2.5rem;
    text-align: center;
    margin-top: 5rem;
  }
  svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
  }
`

const HomeHeader = () => (
  <Header>
    <h2>Jose Roberto Quevedo</h2>
    <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270">
      <path
        d="M-314,267 C105,364 400,100 812,279"
        fill="none"
        stroke="white"
        strokeWidth="120"
        strokeLinecap="round"
      />
    </svg>
  </Header>
)

export default HomeHeader

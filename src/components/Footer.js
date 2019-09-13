import React from 'react'
import styled from '@emotion/styled'

const Container = styled.footer`
  width: 100%;
  max-width: calc(100vw - 5rem);
  height: 75px;
  background-color: rgba(2, 10, 23);
  padding: 1rem 2rem;
  display: flex;
  p {
    margin: auto;
    padding-left: 1rem;
    color: #eee;
    flex: 1;
    span {
      margin-top: 0.3rem;
      font-size: 0.75rem;
      a {
        color: #ffffff;
        text-decoration: none;
      }
    }
  }
  ul {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding: 0px;
    margin: 0px;
    margin-right: 1rem;
    list-style: none;
    li {
      padding: 0.5rem 1rem;
      margin: auto 0.25rem auto 0;
      a {
        font-size: 1rem;
        color: #ffffff;
        text-decoration: none;
      }
    }
  }
`

const Footer = () => (
  <Container>
    <p>
      © Jose Roberto Quevedo {new Date().getFullYear()}.
      <br />
      <span>
        Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        {` `}
        and powered by
        {` `}
        <a href="https://www.gatsbyjs.org">Netlify</a>
      </span>
    </p>
    <ul>
      <li>
        <a href="https://twitter.com/quevedodev" rel="noopener">
          TW
        </a>
      </li>
      <li>
        <a href="https://github.com/zoomelectrico" rel="noopener">
          GH
        </a>
      </li>
    </ul>
  </Container>
)

export default Footer

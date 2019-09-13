import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Container = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  max-width: calc(100vw - 5rem);
  max-height: calc(70px - 1.5rem);
  width: 100%;
  height: 70px;
  padding: 0.5rem 2rem;
  display: flex;
  /* background: ${props => (props.color ? 'transparent' : '#000')}; */
  /* box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1); */
`

const BrandName = styled.div`
  display: flex;
  flex: 1;
  a {
    margin: auto 0.25rem auto 0;
    font-size: 1rem;
    color: #ffffff;
    text-decoration: none;
  }
`

const NavItems = styled.ul`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  padding: 0px;
  margin: 0px;
  margin-right: 1rem;
  list-style: none;
`

const NavItem = styled.li`
  padding: 0.5rem 1rem;
  margin: auto 0.25rem auto 0;
`
const NavLink = styled(Link)`
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
`

const Navbar = () => (
  <Container>
    <BrandName>
      <Link to="/">Quevedo</Link>
    </BrandName>
    <NavItems>
      <NavItem>
        <NavLink to="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/blog">Blog</NavLink>
      </NavItem>
      {/* <NavItem>
        <NavLink to="/bio">Bio</NavLink>
      </NavItem> */}
    </NavItems>
  </Container>
)

export default Navbar

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import { ButtonContainer } from './Button'

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} className="navbar-brand" alt="store" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <Link to="/" className="nav-link">Product</Link>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span classname="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            MyCart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`
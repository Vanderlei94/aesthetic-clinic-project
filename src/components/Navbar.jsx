import logo from '../assets/danusalogo-removebg-preview.png'
import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../styles/Container'

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #1f1f1f;
  color: white;
  padding: 16px 20px;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.h1`
  font-size: 2rem;
`
const LogoImg = styled.img`
  height: 40px;
  width: auto;
`

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
  span {
    height: 3px;
    width: 28px;
    background: white;
    margin-bottom: 5px;
    border-radius: 2px;
    transition: 0.3s;
  }
`

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: #1f1f1f;
    padding: 20px 0;
    gap: 0;
    transition: all 0.3s;
    z-index: 999;
    /* Esconde o menu quando fechado */
    max-height: ${({ open }) => (open ? "300px" : "0")};
    overflow: hidden;
    opacity: ${({ open }) => (open ? 1 : 0)};
    pointer-events: ${({ open }) => (open ? "auto" : "none")};
  }
`

const NavItem = styled.li`
  a {
    color: white;
    font-weight: 500;
    transition: 0.3s;
    display: block;
    padding: 12px 20px;
    &:hover {
      color: #d4af37;
    }
  }
`

const Navbar = () => {
  const [open, setOpen] = useState(false)

  // Fecha o menu ao clicar em um link
  const handleLinkClick = () => setOpen(false)

  return (
    <NavbarContainer>
      <Container>
        <NavContent>
          <LogoImg src={logo} alt="Logo" />
          <Logo>Danusa Amorim</Logo>
          <Hamburger onClick={() => setOpen(!open)}>
            <span style={{ transform: open ? "rotate(45deg) translateY(10px)" : "none" }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? "rotate(-45deg) translateY(-12px)" : "none" }} />
          </Hamburger>
          <NavLinks open={open}>
            <NavItem><a href="#hero" onClick={handleLinkClick}>Início</a></NavItem>
            <NavItem><a href="#clinica" onClick={handleLinkClick}>A Clínica</a></NavItem>
            <NavItem><a href="#servicos" onClick={handleLinkClick}>Serviços</a></NavItem>
            <NavItem><a href="#formacao" onClick={handleLinkClick}>Formação</a></NavItem>
          </NavLinks>
        </NavContent>
      </Container>
    </NavbarContainer>
  )
}

export default Navbar

import styled from 'styled-components'
import logo from '../assets/danusalogo-removebg-preview.png'

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
  height: 80px;
  width: auto;
`

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    background-color: #1f1f1f;
    width: 100%;
    left: 0;
    top: 64px;
    padding: 10px 0;
  }
`

const NavItem = styled.li`
  a {
    color: white;
    font-weight: 500;
    transition: 0.3s;

    &:hover {
      color: #ccc;
    }
  }
`

const Navbar = () => (
  <NavbarContainer>
    <NavContent>
     <LogoImg src={logo} alt="Logo da Clínica" />
      <Logo>Danusa Amorim</Logo>
      <NavLinks>
        <NavItem><a href="#clinica">A Clínica</a></NavItem>
        <NavItem><a href="#services">Serviços</a></NavItem>
        <NavItem><a href="#formacao">Formação</a></NavItem>
      </NavLinks>
    </NavContent>
  </NavbarContainer>
)

export default Navbar

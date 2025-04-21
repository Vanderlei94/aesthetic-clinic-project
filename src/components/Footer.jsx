import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100vw;
  background-color: #1f1f1f;
  color: white;
  text-align: center;
  padding: 30px 20px;
  position: relative;
  left: 0;
`

const Footer = () => (
  <FooterContainer>
    <p>© 2025 Agência Estética. Todos os direitos reservados.</p>
  </FooterContainer>
)

export default Footer

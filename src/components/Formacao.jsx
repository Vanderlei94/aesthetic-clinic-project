import styled from 'styled-components'
import Container from '../styles/Container'

const Section = styled.section`
  padding: 80px 20px;
  background: ${({ theme }) => theme.background};
  scroll-margin-top: 90px;
  width: 100vw;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 16px;
  

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

const Text = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Formacao = () => (
  <Section id="formacao">
    <Container>
      <Title>Formação e Especialização</Title>
      <Text>
        Nossa equipe é formada por profissionais altamente qualificados, com especializações em dermatologia estética, cosmetologia e terapias integrativas.
      </Text>
    </Container>
  </Section>
)

export default Formacao

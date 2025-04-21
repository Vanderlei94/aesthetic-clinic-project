import styled from 'styled-components'
import Container from '../styles/Container'

const Section = styled.section`
  background: #fff;
  padding: 80px 20px;
`

const Formacao = () => (
  <Section id="formacao">
    <Container>
      <h2>Formação e Especialização</h2>
      <p>
        Nossa equipe é formada por profissionais altamente qualificados, com especializações em dermatologia estética, cosmetologia e terapias integrativas.
      </p>
    </Container>
  </Section>
)

export default Formacao
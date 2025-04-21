import styled from 'styled-components'
import Container from '../styles/Container'

const Section = styled.section`
  background-color: #fff;
  padding: 80px 20px;
`

const Clinica = () => (
  <Section id="clinica">
    <Container>
      <h2>A Clínica</h2>
      <p>
        Nossa clínica estética é referência em cuidados com a pele, bem-estar e autoestima.
        Oferecemos atendimento personalizado e técnicas modernas para resultados incríveis.
      </p>
      <a href="#servicos">Conheça nossos serviços</a>
    </Container>
  </Section>
)

export default Clinica

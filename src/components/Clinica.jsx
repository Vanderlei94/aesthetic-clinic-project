import styled from 'styled-components'
import Container from '../styles/Container'

const Section = styled.section`
  padding: 80px 20px;
  width: 100vw;
  background: ${({ theme }) => theme.background};
  scroll-margin-top: 80px;

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

const LinkButton = styled.a`
  display: inline-block;
  padding: 10px 24px;
  background-color: #1f1f1f;
    border: 2px solid #fff;
  color: #fff;
  border-radius: 4px;
  font-size: 1rem;
  transition: 
    color 0.2s,
    background 0.2s,
    border-color 0.2s,
    font-weight 0.2s;;
  text-decoration: none;

  &:hover {
    color: #111;
    border-color: #111;
    font-weight: bold;
    background-color: #d4af37;
  }

  @media (max-width: 768px) {
    padding: 9px 16px;
    font-size: 0.95rem;
  }
`



const Clinica = () => (
  <Section id="clinica">
    <Container>
      <Title>A Clínica</Title>
      <Text>
        Nossa clínica estética é referência em cuidados com a pele, bem-estar e autoestima.
        Oferecemos atendimento personalizado e técnicas modernas para resultados incríveis.
      </Text>
      <LinkButton href="#servicos">Conheça nossos serviços</LinkButton>
    </Container>
  </Section>
)

export default Clinica

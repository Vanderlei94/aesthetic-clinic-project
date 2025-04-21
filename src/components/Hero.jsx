import styled from 'styled-components'
import Container from '../styles/Container'

const HeroSection = styled.section`
  background-color: #ffffff;
  text-align: center;
  padding: 60px 20px;
  max-width: 100%;
  
 @media (max-width: 768px) {
    padding: 40px 10px;
  }
`

const HeroTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

const HeroText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 24px;

   @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const HeroButton = styled.a`
  display: inline-block;
  padding: 12px 28px;
  background-color: #1f1f1f;
  color: white;
  border-radius: 4px;
  transition: 0.3s;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 0.95rem;
  }
`

const Hero = () => (
  <HeroSection>
    <Container>
    <HeroTitle>Realce sua beleza com quem entende</HeroTitle>
    <HeroText>Tratamentos modernos e cursos profissionais</HeroText>
    <HeroButton href="https://wa.me/351939759571?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços." target="_blank" rel="noopener noreferrer">Fale conosco</HeroButton>
    </Container>
  </HeroSection>
)

export default Hero

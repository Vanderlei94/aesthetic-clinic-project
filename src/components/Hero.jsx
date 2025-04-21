import styled from 'styled-components'

const HeroSection = styled.section`
  background-color: #ffffff;
  text-align: center;
  padding: 60px 20px;
`

const HeroTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 16px;
`

const HeroText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 24px;
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
`

const Hero = () => (
  <HeroSection>
    <HeroTitle>Realce sua beleza com quem entende</HeroTitle>
    <HeroText>Tratamentos modernos e cursos profissionais</HeroText>
    <HeroButton href="https://wa.me/351939759571?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços." target="_blank" rel="noopener noreferrer">Fale conosco</HeroButton>
  </HeroSection>
)

export default Hero

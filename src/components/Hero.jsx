import styled from 'styled-components'
import Container from '../styles/Container'
import heroBg from '../assets/clinica.jpg';
import heroMain from '../assets/hero-bg.png';
import SubscribeButton from './buttons/SubscribeButton';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: 
    url(${heroMain}), 
    url(${heroBg});
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  position: relative; 
  scroll-margin-top: 80px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.overlay};
    z-index: 1;
  }


  @media (max-width: 768px) {
    padding: 60px 10px;
    background-size: cover;
  background-position: center;
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

const Hero = () => (
  <HeroSection id="hero">
    <Container style={{ position: "relative", zIndex: 2 }}>
      <HeroTitle>Realce sua beleza com quem entende</HeroTitle>
      <HeroText>Tratamentos modernos e cursos profissionais</HeroText>
      <SubscribeButton href="https://wa.me/351939759571?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços." target="_blank" rel="noopener noreferrer">Fale conosco</SubscribeButton>
    </Container>
  </HeroSection>
)

export default Hero

import styled from 'styled-components'
import Container from '../styles/Container'
import heroBg from '../assets/clinica.jpg';
import heroMain from '../assets/hero-bg.png';

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
    background: ${({ theme }) => theme.heroOverlay};
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

const HeroButton = styled.a`
  display: inline-block;
  padding: 12px 28px;
  background-color: #1f1f1f;
  border: 2px solid #fff;;
  color: #fff;
  border-radius: 4px;
  transition: 
    color 0.2s,
    background 0.2s,
    border-color 0.2s,
    font-weight 0.2s;

  &:hover {
    color: #111;
    border-color: #111;
    font-weight: bold;
    background-color: #d4af37;
  }

  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 0.95rem;
  }
`

const Hero = () => (
  <HeroSection id="hero">
    <Container style={{ position: "relative", zIndex: 2 }}>
      <HeroTitle>Realce sua beleza com quem entende</HeroTitle>
      <HeroText>Tratamentos modernos e cursos profissionais</HeroText>
      <HeroButton href="https://wa.me/351939759571?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços." target="_blank" rel="noopener noreferrer">Fale conosco</HeroButton>
    </Container>
  </HeroSection>
)

export default Hero

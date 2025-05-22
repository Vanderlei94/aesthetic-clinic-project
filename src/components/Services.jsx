import styled from 'styled-components'
import AppointmentButton from './buttons/AppointmentButton'
import sobrancelhaDesignImg from '../assets/design-sobrancelhas.jpg'
import micropigmentacaoImg from '../assets/preenchimento-labial.jpeg'
import extensaoCiliosImg from '../assets/extensao-cilios.jpg'

const ServicesSection = styled.section`
  padding: 80px 20px;
  max-width: 100%;
  background: ${({ theme }) => theme.background};
  scroll-margin-top: 80px;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 16px;
    grid-template-columns: 1fr;
    max-width: 100%;
  }
`

const Card = styled.div`
  background: ${({ theme, $bg }) =>
    $bg
      ? `url(${$bg}) center/cover no-repeat, ${theme.cardBg}`
      : theme.cardBg};
  color: ${({ theme }) => theme.cardText};
  box-shadow: ${({ theme }) => theme.cardShadow};
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.overlay};
    z-index: 1;
    pointer-events: none;
    border-radius: 8px;
    transition: background 0.3s;
  }

  > * {
    position: relative;
    z-index: 2;
  }


  @media (max-width: 768px) {
    padding: 16px;
  }
`

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
`

const Services = () => (
    <ServicesSection id="servicos">
      <Title>Nossos Serviços</Title>
      <ServicesGrid>
        <Card $bg={sobrancelhaDesignImg}>
          <h3>Design de Sobrancelhas</h3>
          <p>Harmonize e valorize seu olhar com técnicas avançadas de design.</p>
          <AppointmentButton />
        </Card>
        <Card $bg={micropigmentacaoImg}>
          <h3>Micropigmentação</h3>
          <p>Realce o tom e a definição dos seus lábios com um efeito natural e harmonioso.</p>
          <AppointmentButton />
        </Card>
        <Card $bg={extensaoCiliosImg}>
          <h3>Extensão de Cílios</h3>
          <p>Alongue e destaque seus cílios com volume e naturalidade.</p>
          <AppointmentButton />
        </Card>
      </ServicesGrid>
    </ServicesSection>
  )

export default Services

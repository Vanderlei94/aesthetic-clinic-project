import styled from 'styled-components'

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
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    gap: 16px;
    grid-template-columns: 1fr;
    max-width: 100%;
  }
`

const Card = styled.div`
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.cardText};
  box-shadow: ${({ theme }) => theme.cardShadow};
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  &:hover {
      color: #d4af37;
    }

  @media (max-width: 768px) {
    padding: 16px;
  }
`

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 32px;
  padding: 0 20px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
`

const Services = () => (
    <ServicesSection id="servicos">
      <Title>Nossos Serviços</Title>
      <ServicesGrid>
        <Card>
          <h3>Design de Sobrancelhas</h3>
          <p>Harmonize e valorize seu olhar com técnicas avançadas de design.</p>
        </Card>
        <Card>
          <h3>Micropigmentação</h3>
          <p>Sobrancelhas perfeitas e naturais com técnicas fio a fio, shadow ou híbrida.</p>
        </Card>
        <Card>
          <h3>Extensão de Cílios</h3>
          <p>Alongue e destaque seus cílios com volume e naturalidade.</p>
        </Card>
        <Card>
          <h3>Lash Lifting</h3>
          <p>Curvatura natural e duradoura dos cílios, sem necessidade de extensões.</p>
        </Card>
        <Card>
          <h3>Brow Lamination</h3>
          <p>Alinhamento e definição dos fios das sobrancelhas para um efeito mais cheio.</p>
        </Card>
        <Card>
          <h3>Cursos Profissionais</h3>
          <p>Capacitação em design de sobrancelhas, micropigmentação e extensão de cílios.</p>
        </Card>
      </ServicesGrid>
    </ServicesSection>
  )

export default Services

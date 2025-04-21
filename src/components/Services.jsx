import styled from 'styled-components'

const ServicesSection = styled.section`
  background-color: #f4f4f4;
  padding: 60px 20px;
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
`

const Card = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  text-align: center;
`

const Services = () => (
  <ServicesSection>
    <ServicesGrid id="services">
      <Card>
        <h3>Limpeza de Pele</h3>
        <p>Revitalize e cuide da sua pele com tratamentos completos.</p>
      </Card>
      <Card>
        <h3>Design de Sobrancelhas</h3>
        <p>Harmonize o rosto com design de sobrancelhas perfeito.</p>
      </Card>
      <Card>
        <h3>Curso de Estética</h3>
        <p>Aprenda e se profissionalize com nossos cursos especializados.</p>
      </Card>
    </ServicesGrid>
  </ServicesSection>
)

export default Services

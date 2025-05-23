import styled from 'styled-components'
import Container from '../styles/Container'
import SubscribeButton from './buttons/SubscribeButton'
import cursoSobrancelhaImg from '../assets/design-sobrancelhas.jpg'
import cursoCiliosImg from '../assets/cilios.jpeg'
import preenchimentoLabialImg from '../assets/preenchimento-labial.jpeg'

const Section = styled.section`
  padding: 80px 20px;
  background: ${({ theme }) => theme.background};
  scroll-margin-top: 90px;
  width: 100vw;

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
  margin-bottom: 32px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-top: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const CourseCard = styled.div`
  min-height: 340px;
  background: ${({ theme, $bg }) =>
    $bg
      ? `url(${$bg}) center/cover no-repeat, ${theme.cardBg}`
      : theme.cardBg};
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${({ theme }) => theme.cardText};
  padding: 40px 32px 32px 32px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  position: relative;
  overflow: hidden;
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

  h3 {
    font-size: 1.7rem;
    margin-bottom: 12px;
    color: ${({ theme }) => theme.text};
  }
  p {
    font-size: 1.1rem;
    margin-bottom: 24px;
  }

  @media (max-width: 900px) {
    min-height: 240px;
    padding: 24px 16px;
    h3 { font-size: 1.2rem; }
    p { font-size: 1rem; }
  }
`

const Button = styled.a`
  display: inline-block;
  padding: 12px 28px;
  background-color: #d4af37;
  color: #111;
  border: 2px solid #d4af37;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: 
    color 0.2s,
    background 0.2s,
    border-color 0.2s,
    font-weight 0.2s;

  &:hover {
    background-color: #fff;
    color: #d4af37;
    border-color: #fff;
    font-weight: bold;
  }
`

const Formacao = () => (
  <Section id="formacao">
    <Container>
      <Title>Formação</Title>
      <Text>
        Cursos de capacitação e especialização para profissionais da beleza.
      </Text>
      <CoursesGrid>
        <CourseCard $bg={cursoSobrancelhaImg}>
          <h3>Curso de Design de Sobrancelhas</h3>
          <p>Aprenda técnicas modernas de design, simetria, henna e muito mais para transformar olhares.</p>
          <SubscribeButton href="https://wa.me/351939759571?text=Olá!%20Quero%20me%20inscrever%20no%20curso%20de%20sobrancelhas!"></SubscribeButton>
        </CourseCard>
        <CourseCard $bg={cursoCiliosImg}>
          <h3>Curso de Extensão de Cílios</h3>
          <p>Domine as técnicas de alongamento fio a fio, volume russo e lash lifting com prática e teoria.</p>
          <SubscribeButton href="https://wa.me/351939759571?text=Olá!%20Quero%20me%20inscrever%20no%20curso%20de%20cílios!"></SubscribeButton>
        </CourseCard>
        <CourseCard $bg={preenchimentoLabialImg}>
          <h3>Curso de Extensão de Cílios</h3>
          <p>Aprenda técnicas avançadas de preenchimento labial para realçar a beleza natural com segurança e precisão.</p>
          <SubscribeButton href="https://wa.me/351939759571?text=Olá!%20Quero%20me%20inscrever%20no%20curso%20de%20preenchimento%20labial!"></SubscribeButton>
        </CourseCard>
      </CoursesGrid>
    </Container>
  </Section>
)

export default Formacao
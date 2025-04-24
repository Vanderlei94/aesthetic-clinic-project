import styled from 'styled-components'

const Button = styled.a`
  display: inline-block;
  padding: 12px 28px;
  background: ${({ theme }) => theme.overlay};
  border: 2px solid #fff;
  color: ${({ theme }) => theme.text};
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

const AppointmentButton = ({ children }) => (
  <Button
    href="https://online.maapp.com.br/Danusamorimbeauty"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children || 'Agende aqui!'}
  </Button>
)

export default AppointmentButton
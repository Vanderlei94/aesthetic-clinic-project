import styled from 'styled-components'

const Button = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 14px 32px;
  background: ${({ theme }) => theme.overlay};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;

  transition:
    color 0.2s,
    background 0.2s,
    border-color 0.2s,
    font-weight 0.2s,
    transform 0.2s;

  &:hover {
    color: #111;
    background-color: #d4af37;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 1rem;
  }
`;

const SubscribeButton = ({ children, href }) => (
  <Button
    href={href || 'https://wa.me/351939759571?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços.'}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children || 'Quero me inscrever!'}
  </Button>
)

export default SubscribeButton
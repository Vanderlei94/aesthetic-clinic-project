import styled from 'styled-components'
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";


const FooterContainer = styled.footer`
  width: 100%;
  background-color: #1f1f1f;
  color: white;
  text-align: center;
  padding: 30px 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px 8px;
    font-size: 0.95rem;
  }
`

const Links = styled.div`
  margin: 16px 0;

  a {
    display: inline-block;
    margin: 0 12px;
    color: #fff;
    font-size: 1.3rem;
    transition: color 0.2s;
    vertical-align: middle;

    &:hover {
      color: #f357a8;
    }
  }

  @media (max-width: 480px) {
    a {
      margin: 0 6px;
      font-size: 1.1rem;
    }
  }
`

const Footer = () => (
  <FooterContainer>
    <Links>
      <a
        href="https://www.instagram.com/danusamorimbeauty"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://wa.me/351939759571?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços."
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://www.google.com/maps/place/R.+Dom+Jorge+de+Lencastre+41,+3800-141+Aveiro/@40.6442301,-8.6573763,17z/data=!3m1!4b1!4m6!3m5!1s0xd23981cab30f373:0x5821d9e25f455f49!8m2!3d40.6442301!4d-8.6548014!16s%2Fg%2F11mq3kw0jm?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        title="Google Maps"
      >
        <FaMapMarkerAlt />
      </a>
    </Links>
    <p>© 2025 Danusa Amorim Beauty. Todos os direitos reservados.</p>
  </FooterContainer>
)

export default Footer

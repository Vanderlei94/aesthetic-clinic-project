import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  html, body {
  max-width: 100vw;
  overflow-x: hidden;
}


  @media (max-width: 768px) {
    html {
      font-size: 15px;
    }
    body {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 14px;
    }
    body {
      font-size: 0.98rem;
    }
  }

 body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: background 0.3s, color 0.3s;
  }
  a {
    color: ${({ theme }) => theme.primary};
  }

  h1, h2, h3 {
    margin-bottom: 12px;
    word-break: break-word;
  }

  p {
    margin-bottom: 8px;
    word-break: break-word;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`

export default GlobalStyle
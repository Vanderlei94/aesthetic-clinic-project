import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import { lightTheme, darkTheme } from './styles/theme'
import { usePreferredTheme } from './hooks/usePreferredTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clinica from './components/Clinica'
import Services from './components/Services'
import Formacao from './components/Formacao'
import Footer from './components/Footer'

function App() {
  const [theme, toggleTheme] = usePreferredTheme();
  
  return (
    <>
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <Hero />
        <Clinica />
        <Services />
        <Formacao />
        <Footer />
      </div>
      </ThemeProvider>
    </>
  )
}

export default App

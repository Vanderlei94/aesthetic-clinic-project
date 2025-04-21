import GlobalStyle from './styles/GlobalStyle'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clinica from './components/Clinica'
import Services from './components/Services'
import Formacao from './components/Formacao'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <Hero />
        <Clinica />
        <Services />
        <Formacao />
        <Footer />
      </div>
    </>
  )
}

export default App

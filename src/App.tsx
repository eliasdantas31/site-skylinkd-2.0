import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { SkylinkdShopIndex } from './pages/skylinkd-shop-index'
import GlobalStyle from './style/style'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação em ms
      offset: 120, // distância em px para iniciar a animação
      once: true, // anima apenas uma vez ao rolar
      easing: 'ease-out' // curva de animação
    })
  }, [])

  return (
    <>
      <GlobalStyle />
      <SkylinkdShopIndex />
    </>
  )
}

export default App

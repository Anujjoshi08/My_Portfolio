import React, { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import { Analytics } from "@vercel/analytics/react"

import 'react-toastify/dist/ReactToastify.css'
function App() {
  useEffect(() => {
    // Enables :active CSS states on iOS Safari for non-anchor/button elements
    document.addEventListener('touchstart', () => {}, { passive: true });
  }, []);

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Analytics />
      <Footer></Footer>
    </>
  )
}

export default App

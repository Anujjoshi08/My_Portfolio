import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import { motion } from "framer-motion"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github-white.svg'
import githubIconGreen from '../../assets/github-green.svg'
import Hello from '../../assets/Hello.gif'
import { useEffect, useState } from 'react'

export function Hero() {
  const [isLightMode, setIsLightMode] = useState(false)

  useEffect(() => {
    const checkTheme = () => {
      setIsLightMode(document.documentElement.classList.contains('light'))
    }
    
    checkTheme()
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    
    return () => observer.disconnect()
  }, [])

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  })
  const fadeRight = (delay = 0) => ({
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay },
  })

  return (
    <Container id="home">
      <div className="hero-text">
        <motion.div {...fadeUp(0)}>
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </motion.div>

        <motion.h1 {...fadeUp(0.2)}>Anuj Joshi</motion.h1>

        <motion.h3 {...fadeUp(0.4)}>Full Stack Developer | MERN Stack Developer</motion.h3>

        <motion.p className="small-resume" {...fadeUp(0.6)}></motion.p>

        <motion.div {...fadeUp(0.8)}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </motion.div>

        <motion.div {...fadeUp(1)}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/anujjoshi08/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/Anujjoshi08"
              target="_blank"
              rel="noreferrer"
            >
              <img src={isLightMode ? githubIconGreen : githubIcon} alt="GitHub" />
            </a>
            

          </div>
        </motion.div>
      </div>
      <div className="hero-image">
        <motion.div {...fadeRight(1)}>
          <img src={Illustration} alt="Ilustração" />
        </motion.div>
      </div>
    </Container>
  )
}
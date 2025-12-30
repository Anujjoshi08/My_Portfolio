import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github-white.svg'
import githubIconGreen from '../../assets/github-green.svg'
import { useEffect, useState } from 'react'



export function Footer() {
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

  return (
    <Container className="footer">
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
    </Container>
  )
}

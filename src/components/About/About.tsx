import { Container } from "./styles";

import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import githubIcon from "../../assets/github-white.svg";
import cIcon from "../../assets/c-icon.svg";
import cppIcon from "../../assets/cpp-icon.svg";
import tailwindIcon from "../../assets/tailwind-icon.svg";
import gitIcon from "../../assets/git-icon.svg";
import mongodbIcon from "../../assets/mongodb-icon.svg";
import expressIcon from "../../assets/express-icon.svg";
import vercelIcon from "../../assets/vercel-icon.svg";
import { motion } from "framer-motion"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <motion.h2 {...fadeUp(0.2)}>About me</motion.h2>
        <motion.p {...fadeUp(0.4)}>
          Hi strangers! I'm Anuj, an enthusiastic Software Engineer skilled in web development and scalable software solutions
        </motion.p>
        <motion.p {...fadeUp(0.6)} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
         
        </motion.p>
        <motion.p {...fadeUp(0.8)}>
          
        </motion.p>
        <motion.div className="education" {...fadeUp(1)}>
          <h3>Education:</h3>
          <h4> Master of Computer Applications (MCA)</h4>
          <p>JECRC University, Jaipur | July 2024 - Present</p>
          <p>8.27 CGPA</p>
        </motion.div>
        <motion.div className="experience" {...fadeUp(1.2)}>
           <h3>Internship:</h3><h4>Web Developer Intern</h4>
          <p>LABMENTIX | May 2025 - July 2025</p>
          <p>Bangalore(Remote), India</p>
        </motion.div>        

        <motion.h3 {...fadeUp(1.4)}>Here are my main skills:</motion.h3>
        <div className="hard-skills">
         
          <div className="hability">
            <motion.div {...fadeUp(1.6)}>
              <img src={jsIcon} alt="JavaScript" />
              <span className="tooltip">JavaScript</span>
            </motion.div>
          </div>
          <div className="hability">
            <motion.div {...fadeUp(1.8)}>
              <img src={reactIcon} alt="React" />
              <span className="tooltip">React</span>
            </motion.div>
          </div>
          <div className="hability">
            <motion.div {...fadeUp(2)}>
              <img src={typescriptIcon} alt="Typescript" />
              <span className="tooltip">TypeScript</span>
            </motion.div>
          </div>
          <div className="hability">
            <motion.div {...fadeUp(2.2)}>
              <img src={vueIcon} alt="Vue" />
              <span className="tooltip">Vue</span>
            </motion.div>
          </div>
         
          
          <div className="hability">
            <motion.div {...fadeUp(2.4)}>
              <img src={htmlIcon} alt="Html" />
              <span className="tooltip">HTML</span>
            </motion.div>
          </div>
          <div className="hability">
            <motion.div {...fadeUp(2.6)}>
              <img src={cssIcon} alt="Css" />
              <span className="tooltip">CSS</span>
            </motion.div>
          </div>
          <div className="hability">
            <motion.div {...fadeUp(2.8)}>
              <img src={boostrapIcon} alt="bootstrap" />
              <span className="tooltip">Bootstrap</span>
            </motion.div>
          </div>
          <div className="hability">
            <motion.div {...fadeUp(3)}>
              <img src={nodeIcon} alt="Node.js" />
              <span className="tooltip">Node.js</span>
            </motion.div>
          </div>
          <div className="hability">
            <motion.div {...fadeUp(3.2)}>
              <img src={expressIcon} alt="Express" />
              <span className="tooltip">Express</span>
            </motion.div>
          </div>
          <div className="hability">
            <motion.div {...fadeUp(3.4)}>
              <img src={tailwindIcon} alt="Tailwind CSS" />
              <span className="tooltip">Tailwind CSS</span>
            </motion.div>
          </div>
          <div className="hability">
            <motion.div {...fadeUp(3.6)}>
              <img src={gitIcon} alt="Git" />
              <span className="tooltip">Git</span>
            </motion.div>
          </div>
          <div className="hability">
            <motion.div {...fadeUp(3.8)}>
              <img src={githubIcon} alt="GitHub" />
              <span className="tooltip">GitHub</span>
            </motion.div>
          </div>
          <div className="hability">
            <motion.div {...fadeUp(4)}>
              <img src={mysqlIcon} alt="MySQL" />
              <span className="tooltip">MySQL</span>
            </motion.div>
          </div>
          <div className="hability">
            <motion.div {...fadeUp(4.2)}>
              <img src={mongodbIcon} alt="MongoDB" />
              <span className="tooltip">MongoDB</span>
            </motion.div>
          </div>
          <div className="hability">
            <motion.div {...fadeUp(4.4)}>
              <img src={cIcon} alt="C" />
              <span className="tooltip">C</span>
            </motion.div>
          </div>
          <div className="hability">
            <motion.div {...fadeUp(4.6)}>
              <img src={cppIcon} alt="C++" />
              <span className="tooltip">C++</span>
            </motion.div>
          </div>
          <div className="hability">
            <motion.div {...fadeUp(4.8)}>
              <img src={vercelIcon} alt="Vercel" />
              <span className="tooltip">Vercel</span>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={VinayakSingh} alt="Vinayak Singh" />
        </ScrollAnimation>
      </div> */}
    </Container>
  )
}

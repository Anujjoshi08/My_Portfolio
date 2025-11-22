import { Container } from "./styles";
import VinayakSingh from "../../assets/VinayakSingh.webp";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import githubIcon from "../../assets/github.svg";
import cIcon from "../../assets/c-icon.svg";
import cppIcon from "../../assets/cpp-icon.svg";
import tailwindIcon from "../../assets/tailwind-icon.svg";
import gitIcon from "../../assets/git-icon.svg";
import mongodbIcon from "../../assets/mongodb-icon.svg";
import expressIcon from "../../assets/express-icon.svg";
import vercelIcon from "../../assets/vercel-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi strangers! I'm Anuj, an enthusiastic Software Engineer skilled in web development and scalable software solutions
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          {/* <p>
            I build responsive web applications, fine-tune ML models, and implement robust backend services.
          </p> */}
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          {/* <p>
            I also work with CMS platforms like WordPress and Shopify to streamline content management.
          </p> */}
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4> Master of Computer Applications (MCA)</h4>
            <p>JECRC University, Jaipur | July 2024 - Present</p>
            <p>8.27 CGPA</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
             <h3>Internship:</h3><h4>Web Developer Intern</h4>
            <p>LABMENTIX | May 2025 - July 2025</p>
            <p>Bangalore(Remote), India</p>
          </div>        
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
         
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
              <span className="tooltip">JavaScript</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
              <span className="tooltip">React</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
              <span className="tooltip">TypeScript</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
              <span className="tooltip">Vue</span>
            </ScrollAnimation>
          </div>
         
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
              <span className="tooltip">HTML</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
              <span className="tooltip">CSS</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
              <span className="tooltip">Bootstrap</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.21 * 1000}>
              <img src={nodeIcon} alt="Node.js" />
              <span className="tooltip">Node.js</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.22 * 1000}>
              <img src={expressIcon} alt="Express" />
              <span className="tooltip">Express</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.23 * 1000}>
              <img src={tailwindIcon} alt="Tailwind CSS" />
              <span className="tooltip">Tailwind CSS</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.24 * 1000}>
              <img src={gitIcon} alt="Git" />
              <span className="tooltip">Git</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.25 * 1000}>
              <img src={githubIcon} alt="GitHub" />
              <span className="tooltip">GitHub</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.26 * 1000}>
              <img src={mysqlIcon} alt="MySQL" />
              <span className="tooltip">MySQL</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.27 * 1000}>
              <img src={mongodbIcon} alt="MongoDB" />
              <span className="tooltip">MongoDB</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.28 * 1000}>
              <img src={cIcon} alt="C" />
              <span className="tooltip">C</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.29 * 1000}>
              <img src={cppIcon} alt="C++" />
              <span className="tooltip">C++</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.30 * 1000}>
              <img src={vercelIcon} alt="Vercel" />
              <span className="tooltip">Vercel</span>
            </ScrollAnimation>
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

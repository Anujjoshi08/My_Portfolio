import { Container } from "./styles";
import githubIcon from "../../assets/github-white.svg";
import externalLink from "../../assets/external-link-white.svg";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <motion.div {...fadeUp(0.1)} className="project-item">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/Anujjoshi08/Take_it_Cheesy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                  href="https://take-it-cheesy-git-main-anuj-joshis-projects-bf06f519.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Take It CheesY</h3>
              <p>
                Created a modern food outlet site with HTML, CSS & JavaScript,
                focusing on an aesthetic and appetizing UI. It features
                interactive menu cards, hover animations, and mobile-friendly
                layout. Designed to give users an easy and enjoyable
                food-browsing experience.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="project-item">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/Anujjoshi08/News_Website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://news-website-client.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>News Website</h3>
              <p>
                Built a responsive News Website with React (Vite) plus HTML and
                CSS. It pulls live articles into clean categories with smooth
                navigation, keeping the UI fast, lightweight, and easy to read
                across devices.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>React.js</li>
                <li>Node.js</li>
              </ul>
            </footer>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.3)} className="project-item">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/Anujjoshi08/My_Portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://my-portfolio-5asqpyfvw-anuj-joshis-projects-bf06f519.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Portfolio</h3>
              <p>
                Portfolio site built with React, TypeScript, and Tailwind CSS,
                focused on a minimal, responsive layout. It highlights projects
                with interactive cards, smooth navigation, and clean sections
                that present my work clearly across devices.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                
              </ul>
            </footer>
          </div>
        </motion.div>

        
        <motion.div {...fadeUp(0.3)} className="project-item">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/Anujjoshi08/Netlify_nf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://netlify-nf.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Netflix_Clone</h3>
              <p>
                Netflix-style streaming clone with React, and Tailwind CSS
                featuring hero banners, category rows, hover previews, and
                responsive layouts that feel close to the real experience. Built
                with modern design patterns to deliver a seamless viewing interface
                across all devices.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>SCSS</li>
                <li>React.js</li>
                <li>Node.js</li>
                {/* <li></li> */}
              </ul>
            </footer>
          </div>
        </motion.div>
        
        <motion.div {...fadeUp(0.3)} className="project-item">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/Anujjoshi08/Task-Manager"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://task-manager-ten-cyan.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Task Manager</h3>
              <p>
                A responsive task management application built with React and Tailwind CSS.
                Features include task creation, editing, deletion, and status tracking.
                Designed with a clean UI and intuitive user experience for efficient task organization.
                across all devices.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>Tailwind CSS</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                
                {/* <li></li> */}
              </ul>
            </footer>
          </div>
        </motion.div>
        
      
     
       

      </div>
    </Container>
  );
}

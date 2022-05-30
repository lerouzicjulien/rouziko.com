import './styles.scss';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Prism from 'prismjs';
import blog from '../../assets/images/blog.png';
import dashboard from '../../assets/images/dashboard.png';
import gameJs from '../../assets/images/gameJs.png';

// == Composant
function MyProjects() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const myProjects = "const myProjects = ['Fake Blog', 'Dashboard API', 'Game JavaScript']";
  return (
    <motion.div
      className="myProjects"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="pulsation" />
      <div className="myProjects-title">
        <pre>
          <code className="language-jsx">{myProjects}</code>
        </pre>
      </div>
      <div className="myProjects-results">
        <div className="project">
          <div className="project-carre1" />
          <div className="project-carre2" />
          <div className="project-carre3" />
          <div className="project-header">
            <img src={blog} alt="blog" className="project-header-img" />
          </div>
          <h2 className="project-title">Fake blog</h2>
          <div className="project-header-buttons">
            <button className="project-header-buttons-test" type="button">Tester</button>
            <a href="https://github.com/lerouzicjulien/fake-blog" rel="noopener noreferrer" target="_blank"><button className="project-header-buttons-github" type="button">Github</button></a>
          </div>
        </div>
        <div className="project">
          <div className="project-carre1" />
          <div className="project-carre2" />
          <div className="project-carre3" />
          <div className="project-header">
            <img src={dashboard} alt="blog" className="project-header-img" />
          </div>
          <h2 className="project-title">Dashboard API</h2>
          <div className="project-header-buttons">
            <button type="button" className="project-header-buttons-test">Tester</button>
            <a href="https://github.com/lerouzicjulien/dashboard-api" rel="noopener noreferrer" target="_blank"><button type="button" className="project-header-buttons-github">Github</button></a>
          </div>
        </div>
        <div className="project">
          <div className="project-carre1" />
          <div className="project-carre2" />
          <div className="project-carre3" />
          <div className="project-header">
            <img src={gameJs} alt="blog" className="project-header-img" />
          </div>
          <h2 className="project-title">Game JavaScript</h2>
          <div className="project-header-buttons">
            <button className="project-header-buttons-test" type="button">Tester</button>
            <a href="#" rel="noopener noreferrer" target="_blank"><button className="project-header-buttons-github" type="button">Github</button></a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// == Export
export default MyProjects;

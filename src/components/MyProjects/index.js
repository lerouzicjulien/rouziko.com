import './styles.scss';
import { useEffect } from 'react';
import Prism from 'prismjs';
import { Flip } from 'react-reveal';
import dashboard from '../../assets/images/dashboard.png';
import olumni from '../../assets/images/olumni.png';
import zuivi from '../../assets/images/zuivi.png';

// == Composant
function MyProjects() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const myProjects = 'const myProjects = ["O\'lumni", "Dashboard API", "Zuivi", "Ziem"];';
  // const myProjects2 = '   "O\'lumni", "Dashboard API", "Zuivi", "Ziem"';
  // const myProjects3 = '];';
  return (
    <div className="myProjects">
      <Flip left>
        <div className="pulsation" />
        <div className="myProjects-title">
          <pre>
            <code className="language-jsx">{myProjects}</code>
            {/* <code className="language-jsx">{myProjects2}</code><br />
            <code className="language-jsx">{myProjects3}</code> */}
          </pre>
        </div>
      </Flip>
      <div className="myProjects-results">
        <div className="myProjects-results-1">
          <div className="project">
            <div className="project-carre1" />
            <div className="project-carre2" />
            <div className="project-carre3" />
            <h2 className="project-title">O'lumni</h2>
            <div className="project-header">
              <img src={olumni} alt="blog" className="project-header-img" />
            </div>

            <div className="project-header-buttons">
              <a href="https://youtu.be/api6Qm4WWSM?t=4573" rel="noopener noreferrer" target="_blank" className="project-header-buttons-test" type="button">Présentation</a>
              {/* <a href="https://github.com/lerouzicjulien/" rel="noopener noreferrer" target="_blank" className="project-header-buttons-github">Github</a> */}
            </div>
          </div>
          <div className="project">
            <div className="project-carre1" />
            <div className="project-carre2" />
            <div className="project-carre3" />
            <h2 className="project-title">Dashboard API</h2>
            <div className="project-header">
              <img src={dashboard} alt="blog" className="project-header-img" />
            </div>
            <div className="project-header-buttons">
              <a href="https://rouziko-dashboard.surge.sh/" rel="noopener noreferrer" target="_blank" className="project-header-buttons-test">Tester</a>
              <a href="https://github.com/lerouzicjulien/dashboard-api" rel="noopener noreferrer" target="_blank" className="project-header-buttons-github">Github</a>
            </div>
          </div>
        </div>
        <div className="myProjects-results-1">
          <div className="project">
            <div className="project-carre1" />
            <div className="project-carre2" />
            <div className="project-carre3" />
            <h2 className="project-title">Zuivi</h2>
            <div className="project-header">
              <img src={zuivi} alt="blog" className="project-header-img" />
            </div>
            <div className="project-header-buttons">
              <a href="https://rouziko-dashboard.surge.sh/" rel="noopener noreferrer" target="_blank" className="project-header-buttons-test">Tester</a>
              <a href="https://github.com/lerouzicjulien/dashboard-api" rel="noopener noreferrer" target="_blank" className="project-header-buttons-github">Github</a>
            </div>
          </div>
          <div className="project">
            <div className="project-carre1" />
            <div className="project-carre2" />
            <div className="project-carre3" />
            <h2 className="project-title">Dashboard API</h2>
            <div className="project-header">
              <img src={dashboard} alt="blog" className="project-header-img" />
            </div>
            <div className="project-header-buttons">
              <a href="https://rouziko-dashboard.surge.sh/" rel="noopener noreferrer" target="_blank" className="project-header-buttons-test">Tester</a>
              <a href="https://github.com/lerouzicjulien/dashboard-api" rel="noopener noreferrer" target="_blank" className="project-header-buttons-github">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// == Export
export default MyProjects;

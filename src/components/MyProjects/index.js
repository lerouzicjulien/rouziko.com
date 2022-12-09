import './styles.scss';
import { useEffect, useState } from 'react';
import Prism from 'prismjs';
import { Fade } from 'react-reveal';
import dashboard from '../../assets/images/dashboard.png';
import olumni from '../../assets/images/olumni.png';
import zuivi from '../../assets/images/zuivi2.png';
import ziem from '../../assets/images/ziem.png';

// == Composant
function MyProjects() {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 1000px)').matches,
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 1000px)')
      .addEventListener('change', (e) => setMatches(e.matches));

    Prism.highlightAll();
  }, []);

  const myProjectsMobile = 'const myProjects = ["O\'lumni", "Dashboard API", "Zuivi", "Ziem"];';
  const myProjects = 'const myProjects = [';
  const myProjects2 = '   "O\'lumni", "Dashboard API", "Zuivi", "Ziem"';
  const myProjects3 = '];';
  return (
    <Fade up>
      <div className="myProjects">
        <div className="pulsation" />
        <div className="myProjects-title">

          {matches
            ? (
              <pre>
                <code className="language-jsx">{myProjectsMobile}</code>
              </pre>
            )
            : (
              <pre>
                <code className="language-jsx">{myProjects}</code><br />
                <code className="language-jsx">{myProjects2}</code><br />
                <code className="language-jsx">{myProjects3}</code>
              </pre>
            )}
        </div>
        <div className="myProjects-results">
          <div className="myProjects-results-1">
            <div className="cadre">
              <div className="project">
                <div className="project-carre1" />
                <div className="project-carre2" />
                <div className="project-carre3" />
                <h2 className="project-title">O'lumni</h2>
                <div className="project-header">
                  <img src={olumni} alt="blog" className="project-header-img" />
                </div>
                <div className="project-header-text">
                  Réseau social pour anciens élèves
                </div>
                <div className="project-header-buttons">
                  <a href="https://youtu.be/api6Qm4WWSM?t=4573" rel="noopener noreferrer" target="_blank" className="project-header-buttons-test" type="button">Présentation</a>
                  {/* <a href="https://github.com/lerouzicjulien/" rel="noopener noreferrer" target="_blank" className="project-header-buttons-github">Github</a> */}
                </div>
              </div>
            </div>
            <div className="cadre">
              <div className="project">
                <div className="project-carre1" />
                <div className="project-carre2" />
                <div className="project-carre3" />
                <h2 className="project-title">Dashboard API</h2>
                <div className="project-header">
                  <img src={dashboard} alt="blog" className="project-header-img" />
                </div>
                <div className="project-header-text">
                  Appels API : meteo, cocktail, nasa ...
                </div>
                <div className="project-header-buttons">
                  <a href="https://rouziko-dashboard.surge.sh/" rel="noopener noreferrer" target="_blank" className="project-header-buttons-test">Tester</a>
                  <a href="https://github.com/lerouzicjulien/dashboard-api" rel="noopener noreferrer" target="_blank" className="project-header-buttons-github">Github</a>
                </div>
              </div>
            </div>
          </div>
          <div className="myProjects-results-1">
            <div className="cadre">
              <div className="project">
                <div className="project-carre1" />
                <div className="project-carre2" />
                <div className="project-carre3" />
                <h2 className="project-title">Zuivi</h2>
                <div className="project-header">
                  <img src={zuivi} alt="blog" className="project-header-img" />
                </div>
                <div className="project-header-text">
                  Application de suivi des entretiens
                </div>
              </div>
            </div>
            <div className="cadre">
              <div className="project">
                <div className="project-carre1" />
                <div className="project-carre2" />
                <div className="project-carre3" />
                <h2 className="project-title">Ziem</h2>
                <div className="project-header">
                  <img src={ziem} alt="blog" className="project-header-img" />
                </div>
                <div className="project-header-text">
                  IHM pour visualiser le trafic d'un réseau et détection d'intrusion
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

// == Export
export default MyProjects;

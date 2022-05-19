import './styles.scss';

import blog from '../../assets/images/blog.png';
import dashboard from '../../assets/images/dashboard.jpg';
import gameJs from '../../assets/images/gameJs.png';
import responsive from '../../assets/images/responsive.png';

// == Composant
function MyProjects() {
  return (
    <>
      <h1 className="myProjects-title">My projects</h1>
      <div className="myProjects">
        <div className="project">
          <div className="project-carre1" />
          <div className="project-carre2" />
          <div className="project-carre3" />
          <div className="project-header">
            <img src={blog} alt="blog" className="project-header-img" />
            <div className="projet-header-buttons">
              <div className="projet-header-buttons-test"><button type="button">Tester</button></div>
              <div className="projet-header-buttons-github"><button type="button">Github</button></div>
            </div>
          </div>
          <h2 className="project-title">Fake blog</h2>
          <p className="project-description">Mautadine de verrat de charrue de maudine de géritole de crucifix.</p>
        </div>
        <div className="project">
          <div className="project-carre1" />
          <div className="project-carre2" />
          <div className="project-carre3" />
          <div className="project-header">
            <img src={dashboard} alt="blog" className="project-header-img" />
            <div className="projet-header-buttons">
              <div className="projet-header-buttons-test"><button type="button">Tester</button></div>
              <div className="projet-header-buttons-github"><button type="button">Github</button></div>
            </div>
          </div>
          <h2 className="project-title">Dashboard API</h2>
          <p className="project-description">Crucifix de viande à chien de charrue de torvisse de cibouleau de colon.</p>
        </div>
        <div className="project">
          <div className="project-carre1" />
          <div className="project-carre2" />
          <div className="project-carre3" />
          <div className="project-header">
            <img src={gameJs} alt="blog" className="project-header-img" />
            <div className="projet-header-buttons">
              <div className="projet-header-buttons-test"><button type="button">Tester</button></div>
              <div className="projet-header-buttons-github"><button type="button">Github</button></div>
            </div>
          </div>
          <h2 className="project-title">Game JavaScript</h2>
          <p className="project-description">Christie de viande à chien de purée de patente à gosse de crucifix de maudit.</p>
        </div>
        <div className="project">
          <div className="project-carre1" />
          <div className="project-carre2" />
          <div className="project-carre3" />
          <div className="project-header">
            <img src={responsive} alt="blog" className="project-header-img" />
            <div className="projet-header-buttons">
              <div className="projet-header-buttons-test"><button type="button">Tester</button></div>
              <div className="projet-header-buttons-github"><button type="button">Github</button></div>
            </div>
          </div>
          <h2 className="project-title">Responsive replica</h2>
          <p className="project-description">Calvaire de cibole de saint-cimonaque d'enfant d'chienne de purée de bout d'viarge.</p>
        </div>
      </div>
    </>
  );
}

// == Export
export default MyProjects;

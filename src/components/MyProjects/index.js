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
          <img src={blog} alt="blog" className="project project-img" />
          <h2 className="project project-title">Fake blog</h2>
          <p className="project project-description">Mautadine de verrat de charrue de maudine de géritole de crucifix.</p>
        </div>
        <div className="project">
          <img src={dashboard} alt="dashboard" className="project project-img" />
          <h2 className="project project-title">Dashboard API</h2>
          <p className="project project-description">Crucifix de viande à chien de charrue de torvisse de cibouleau de colon.</p>
        </div>
        <div className="project">
          <img src={gameJs} alt="gameJs" className="project project-img" />
          <h2 className="project project-title">Game JavaScript</h2>
          <p className="project project-description">Christie de viande à chien de purée de patente à gosse de crucifix de maudit.</p>
        </div>
        <div className="project">
          <img src={responsive} alt="responsive" className="project project-img" />
          <h2 className="project project-title">Responsive replica</h2>
          <p className="project project-description">Calvaire de cibole de saint-cimonaque d'enfant d'chienne de purée de bout d'viarge.</p>
        </div>
      </div>
    </>
  );
}

// == Export
export default MyProjects;

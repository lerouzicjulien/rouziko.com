import './styles.scss';

import blog from '../../assets/images/blog.png';
import dashboard from '../../assets/images/dashboard.png';
import gameJs from '../../assets/images/gameJs.png';
// import responsive from '../../assets/images/responsive.png';

// == Composant
function MyProjects() {
  return (
    <div className="myProjects">
      <h1 className="myProjects-title">My projects</h1>
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
        {/* <div className="project">
          <div className="project-carre1" />
          <div className="project-carre2" />
          <div className="project-carre3" />
          <div className="project-header">
            <img src={responsive} alt="blog" className="project-header-img" />
          </div>
          <h2 className="project-title">Responsive replica</h2>
          <div className="project-header-buttons">
            <button className="project-header-buttons-test" type="button">Tester</button>
            <a href="https://github.com/lerouzicjulien/replica-responsive" rel="noopener noreferrer" target="_blank"><button className="project-header-buttons-github" type="button">Github</button></a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

// == Export
export default MyProjects;

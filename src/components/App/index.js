// == Import
import './styles.scss';
import { Routes, Route } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import AboutMe from '../AboutMe';
import ContactMe from '../ContactMe';
import MyProjects from '../MyProjects';
import Accueil from '../Accueil';
import Header from '../Header';
import BurgerMenu from '../BurgerMenu';

// == Composant
function App() {
  console.log(window.innerWidth);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route
          path="/aboutme"
          element={(
            <>
              {window.matchMedia('(min-width: 1200px)') ? <BurgerMenu /> : <Header />}
              {/* <Header /> */}
              <AboutMe />
            </>
          )}
        />
        <Route
          path="/myprojects"
          element={(
            <>
              <Header />
              <MyProjects />
            </>
          )}
        />
        <Route
          path="/contactme"
          element={(
            <>
              <Header />
              <ContactMe />
            </>
          )}
        />
      </Routes>
    </div>
  );
}

// == Export
export default App;

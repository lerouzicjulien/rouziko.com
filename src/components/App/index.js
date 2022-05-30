// == Import
import './styles.scss';
import { Routes, Route } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { AnimatePresence } from 'framer-motion';
import AboutMe from '../AboutMe';
import ContactMe from '../ContactMe';
import Footer from '../Footer';
import MyProjects from '../MyProjects';
import Accueil from '../Accueil';
import Header from '../Header';

// == Composant
function App() {
  return (
    <div className="app">
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route
            path="/aboutme"
            element={(
              <>
                <Header />
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
      </AnimatePresence>
      <Footer />
    </div>
  );
}

// == Export
export default App;

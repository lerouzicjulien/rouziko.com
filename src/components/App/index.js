// == Import
import './styles.scss';
import { Routes, Route } from 'react-router-dom';
import AboutMe from '../AboutMe';
import ContactMe from '../ContactMe';
import MyProjects from '../MyProjects';
import Accueil from '../Accueil';
import Header from '../Header';
import Footer from '../Footer';

// == Composant
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route
          path="/aboutme"
          element={(
            <>
              <Header />
              <AboutMe />
              <Footer />
            </>
          )}
        />
        <Route
          path="/myprojects"
          element={(
            <>
              <Header />
              <MyProjects />
              <Footer />
            </>
          )}
        />
        <Route
          path="/contactme"
          element={(
            <>
              <Header />
              <ContactMe />
              <Footer />
            </>
          )}
        />
      </Routes>
    </div>
  );
}

// == Export
export default App;

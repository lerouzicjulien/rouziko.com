// == Import
import './styles.scss';
import { Routes, Route } from 'react-router-dom';
// import 'prismjs/themes/prism.css';

import Header from '../Header';
import AboutMe from '../AboutMe';
import ContactMe from '../ContactMe';
import Footer from '../Footer';
import MyProjects from '../MyProjects';
import Accueil from '../Accueil';
// import Background from '../Background';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/myprojects" element={<MyProjects />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
      {/* <Background /> */}
      <Footer />
    </div>
  );
}

// == Export
export default App;

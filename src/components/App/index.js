// == Import
import './styles.scss';

import Header from '../Header';
import AboutMe from '../AboutMe';
import ContactMe from '../ContactMe';
import Footer from '../Footer';
import MyProjects from '../MyProjects';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <Footer />
    </div>
  );
}

// == Export
export default App;

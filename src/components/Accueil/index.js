import './styles.scss';
import { NavLink } from 'react-router-dom';
import { Fade, Flip } from 'react-reveal';

function Accueil() {
  return (
    <div className="accueil">
      <Fade left>
        <div className="accueil-logo">
          <div className="accueil-logo-carre">
            <div className="accueil-logo-carre-1" />
            <div className="accueil-logo-carre-2" />
            <div className="accueil-logo-carre-3" />
          </div>
          <div className="accueil-logo-title">RZK</div>
          <div className="accueil-logo-subTitle">Julien LE ROUZIC</div>
        </div>
        <div className="accueil-dev">Développeur web</div>
      </Fade>
        <nav className="accueil-nav">
          <ul className="accueil-nav-links">
            <NavLink to="/aboutme" className="accueil-nav-links-li">[ About me ]</NavLink>
            <div className="accueil-nav-links-li accueil-nav-links-li-x"> X </div>
            <NavLink to="/myprojects" className="accueil-nav-links-li">[ My projects ]</NavLink>
            <div className="accueil-nav-links-li accueil-nav-links-li-x"> X </div>
            <NavLink to="contactme" className="accueil-nav-links-li">[ Contact me ]</NavLink>
          </ul>
        </nav>
    </div>
  );
}

export default Accueil;

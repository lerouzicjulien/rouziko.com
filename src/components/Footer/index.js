import './styles.scss';
import { NavLink } from 'react-router-dom';
import { Rotate } from 'react-reveal';

// == Composant
function Footer() {
  return (
    <Rotate bottom left>
      <div className="footer">
        <nav className="footer-nav">
          <ul className="footer-nav-links">
            <NavLink to="/aboutme" className="footer-nav-links-li">[ About me ]</NavLink>
            <div className="footer-nav-links-li footer-nav-links-li-x"> X </div>
            <NavLink to="/myprojects" className="footer-nav-links-li">[ My projects ]</NavLink>
            <div className="footer-nav-links-li footer-nav-links-li-x"> X </div>
            <NavLink to="/contactme" className="footer-nav-links-li">[ Contact me ]</NavLink>
          </ul>
        </nav>
      </div>
    </Rotate>
  );
}

// == Export
export default Footer;

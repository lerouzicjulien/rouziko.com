import './styles.scss';
import { Link, NavLink } from 'react-router-dom';
import { Fade } from 'react-reveal';
import logoBlack from '../../assets/images/logoRZKblack.png';

// == Composant
function Header() {
  return (
    <Fade down>
      <div className="header" id="home">
        <Link to="/"><img src={logoBlack} alt="logo-rzk" className="header-img" /></Link>
        <nav className="nav">
          <ul className="nav-links">
            <NavLink to="/aboutme" className="nav-links-li">[ About me ]</NavLink>
            <div className="nav-links-li nav-links-li-x"> X </div>
            <NavLink to="/myprojects" className="nav-links-li">[ My projects ]</NavLink>
            <div className="nav-links-li nav-links-li-x"> X </div>
            <NavLink to="/contactme" className="nav-links-li">[ Contact me ]</NavLink>
          </ul>
        </nav>
        <Link to="/"><h1 className="me">Julien<br />Le Rouzic</h1></Link>
      </div>
    </Fade>
  );
}

// == Export
export default Header;

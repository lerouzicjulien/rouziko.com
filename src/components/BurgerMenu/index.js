import { slide as Menu } from 'react-burger-menu';
import './styles.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logoRZKv.png';

// == Composant
function BurgerMenu() {
  return (
    <Menu>
      <div className="header" id="home">
        <Link to="/"><img src={logo} alt="logo-rzk" className="header-img" /></Link>
        <nav className="nav">
          <ul className="nav-links">
            <NavLink to="/aboutme" className="nav-links-li">[ About me ]</NavLink>
            <div className="nav-links-li nav-links-li-x"> X </div>
            <NavLink to="/myprojects" className="nav-links-li">[ My projects ]</NavLink>
            <div className="nav-links-li nav-links-li-x"> X </div>
            <NavLink to="/contactme" className="nav-links-li">[ Contact me ]</NavLink>
          </ul>
        </nav>
        <h1 className="me">Julien <br />Le Rouzic</h1>
      </div>
    </Menu>
  );
}

// == Export
export default BurgerMenu;

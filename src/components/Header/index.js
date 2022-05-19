import './styles.scss';
import logo from '../../assets/images/logoRZKv.png';

// == Composant
function Header() {
  return (
    <div className="header" id="home">
      <a href="#home"><img src={logo} alt="logo-rzk" className="header-img" /></a>
      <nav className="nav">
        <ul className="nav-links">
          <div className="nav-links-li">[ About me ]</div>
          <div className="nav-links-li nav-links-li-x"> X </div>
          <div className="nav-links-li">[ My projects ]</div>
          <div className="nav-links-li nav-links-li-x"> X </div>
          <div className="nav-links-li">[ Contact me ]</div>
        </ul>
      </nav>
      <h1 className="me">Julien Le Rouzic</h1>
    </div>
  );
}

// == Export
export default Header;

import './styles.scss';
import logo from '../../assets/images/logoRZK.png';

// == Composant
function Header() {
  return (
    <div className="header" id="home">
      <a href="#home"><img src={logo} alt="logo-rzk" className="header-img" /></a>
      <nav className="nav">
        {/* <NavLink to="#" className="nav-link">About me</NavLink>
        <NavLink to="#" className="nav-link">My projects</NavLink>
        <NavLink to="#" className="nav-link">Contact me</NavLink> */}
        <ul className="nav-links">
          <div className="nav-links-li">[ About me ]</div>
          <div className="nav-links-li nav-links-li-x"> X </div>
          <div className="nav-links-li">[ My projects ]</div>
          <div className="nav-links-li nav-links-li-x"> X </div>
          <div className="nav-links-li">[ Contact me ]</div>
        </ul>
      </nav>
      {/* <button type="button">Color mode</button> */}
    </div>
  );
}

// == Export
export default Header;

import './styles.scss';
import logo from '../../assets/images/logo-RZK-bleu.png';

// == Composant
function Header() {
  return (
    <div className="header" id="home">
      <a href="#home"><img src={logo} alt="logo-rzk" /></a>
      <nav className="nav">
        {/* <NavLink to="#" className="nav-link">About me</NavLink>
        <NavLink to="#" className="nav-link">My projects</NavLink>
        <NavLink to="#" className="nav-link">Contact me</NavLink> */}
        <ul className="nav-links">
          <div className="nav-links-li">About me</div>
          <div className="nav-links-li">My projects</div>
          <div className="nav-links-li">Contact me</div>
        </ul>
      </nav>
      <button type="button">Color mode</button>
    </div>
  );
}

// == Export
export default Header;

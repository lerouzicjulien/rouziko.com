/* eslint-disable react/jsx-no-constructed-context-values */
import './styles.scss';

import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';

// == Composant
function ContactMe() {
  return (
    <div className="contactMe">
      <h1 className="contactMe-title">Contact me</h1>
      <IconContext.Provider value={{ color: '#5cfac6', size: '5em' }}>
        <div className="contactMe-icones">
          <a href="https://github.com/lerouzicjulien" rel="noopener noreferrer" target="_blank"><FaGithub className="contactMe-icones-fa" /></a>
          <a href="https://fr.linkedin.com/in/julien-le-rouzic-a37870238" rel="noopener noreferrer" target="_blank"><FaLinkedinIn className="contactMe-icones-fa" href="" /></a>
          <a href="lerouzicjulien@gmail.com" rel="noopener noreferrer" target="_blank"><FaMailBulk className="contactMe-icones-fa" /></a>
        </div>
      </IconContext.Provider>
    </div>
  );
}

// == Export
export default ContactMe;

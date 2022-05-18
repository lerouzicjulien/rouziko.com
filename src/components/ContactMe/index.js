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
          <FaGithub className="contactMe-icones-fa" />
          <FaLinkedinIn className="contactMe-icones-fa" />
          <FaMailBulk className="contactMe-icones-fa" />
        </div>
      </IconContext.Provider>
    </div>
  );
}

// == Export
export default ContactMe;

/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-constructed-context-values */
import './styles.scss';
import { useEffect } from 'react';
import Prism from 'prismjs';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';
import { Flip } from 'react-reveal';
import avatar from 'src/assets/images/avataaars.png';

// == Composant
function ContactMe() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const contactMe1 = 'if(youAreInterested === true) {';
  const contactMe2 = '  contactMe()';
  const contactMe3 = '} else {';
  const contactMe4 = '  keepMyContactAnyway()};';
  const contactMe5 = '};';
  return (
    <div className="contactMe">
      <Flip left>
        <div className="pulsation" />
        <div className="contactMe-title">
          <pre>
            <code className="language-javascript">{contactMe1}</code><br />
            <code className="language-javascript">{contactMe2}</code><br />
            <code className="language-javascript">{contactMe3}</code><br />
            <code className="language-javascript">{contactMe4}</code><br />
            <code className="language-javascript">{contactMe5}</code>
          </pre>
        </div>
      </Flip>
      <Flip left><div className="contactMe-avatar"><img src={avatar} alt="avatar" /></div></Flip>
      <IconContext.Provider value={{ color: '#5cfac6', size: '5em' }}>
        <div className="contactMe-icones">
          <a href="https://github.com/lerouzicjulien" rel="noopener noreferrer" target="_blank"><FaGithub className="contactMe-icones-fa" /></a>
          <a href="https://fr.linkedin.com/in/julien-le-rouzic-a37870238" rel="noopener noreferrer" target="_blank"><FaLinkedinIn className="contactMe-icones-fa" /></a>
          <a
            onClick={() => {
              navigator.clipboard.writeText('lerouzicjulien@gmail.com');
              alert('l\'adresse mail a bien été copié');
            }}
          ><FaMailBulk className="contactMe-icones-fa" />
          </a>
        </div>
      </IconContext.Provider>
    </div>
  );
}

// == Export
export default ContactMe;

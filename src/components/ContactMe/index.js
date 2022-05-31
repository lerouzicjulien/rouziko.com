/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-constructed-context-values */
import './styles.scss';
import { useEffect } from 'react';
import Prism from 'prismjs';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';
import { Fade } from 'react-reveal';

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
      <Fade down>
        <div className="pulsation" />
        <div className="contactMe-title">
          <pre className="line-numbers">
            <code className="language-javascript">{contactMe1}</code><br />
            <code className="language-javascript">{contactMe2}</code><br />
            <code className="language-javascript">{contactMe3}</code><br />
            <code className="language-javascript">{contactMe4}</code><br />
            <code className="language-javascript">{contactMe5}</code>
          </pre>
        </div>
      </Fade>
      <Fade up>
        <IconContext.Provider value={{ color: '#5cfac6', size: '5em' }}>
          <div className="contactMe-icones">
            <a href="https://github.com/lerouzicjulien" rel="noopener noreferrer" target="_blank"><FaGithub className="contactMe-icones-fa" /></a>
            <a href="https://fr.linkedin.com/in/julien-le-rouzic-a37870238" rel="noopener noreferrer" target="_blank"><FaLinkedinIn className="contactMe-icones-fa" /></a>
            <a href="lerouzicjulien@gmail.com" rel="noopener noreferrer" target="_blank"><FaMailBulk className="contactMe-icones-fa" /></a>
          </div>
        </IconContext.Provider>
      </Fade>
    </div>
  );
}

// == Export
export default ContactMe;

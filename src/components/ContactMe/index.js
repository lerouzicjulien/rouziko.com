/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-constructed-context-values */
import './styles.scss';
import { useEffect } from 'react';
import Prism from 'prismjs';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';
import { Fade } from 'react-reveal';
import avatar from 'src/assets/images/avataaars.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
  const mail = 'lerouzicjulien@gmail.com';
  return (
    <Fade up>
      <div className="contactMe">
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
        <div className="contactMe-avatar"><img src={avatar} alt="avatar" /></div>
        <IconContext.Provider value={{ color: '#5cfac6', size: '5em' }}>
          <div className="contactMe-icones">
            <a href="https://github.com/lerouzicjulien" rel="noopener noreferrer" target="_blank"><FaGithub className="contactMe-icones-fa" /></a>
            <a href="https://fr.linkedin.com/in/julien-le-rouzic-a37870238" rel="noopener noreferrer" target="_blank"><FaLinkedinIn className="contactMe-icones-fa" /></a>
            <button
              type="button"
              className="contactMe-icones-fa"
              onClick={() => {
                alert('l\'adresse mail a bien été copié');
              }}
            >
              <CopyToClipboard text={mail}>
                <FaMailBulk />
              </CopyToClipboard>
            </button>
          </div>
        </IconContext.Provider>
      </div>
    </Fade>
  );
}

// == Export
export default ContactMe;

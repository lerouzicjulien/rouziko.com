/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable max-len */

import './styles.scss';
import { IconContext } from 'react-icons';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiGit,
  SiGithub,
  SiAdobeillustrator,
} from 'react-icons/si';
import { useEffect, useState } from 'react';
import Prism from 'prismjs';
import { Fade } from 'react-reveal';

// == Composant
function AboutMe() {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 1000px)').matches,
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 1000px)')
      .addEventListener('change', (e) => setMatches(e.matches));

    Prism.highlightAll();
  }, [matches]);

  const title = 'class Julien extends Le.Rouzic {';
  const title2 = '  \'Développeur web\'';
  const title3 = '};';

  const title4 = 'class Julien extends Le.Rouzic {\'Développeur web\'}';

  return (
    <Fade up>
      <div className="aboutMe">
        <div className="dev-title">
          <pre>
            {matches ? (
              <code className="language-jsx">{title4}</code>
            ) : (
              <>
                <code className="language-jsx">{title}</code><br />
                <code className="language-jsx">{title2}</code><br />
                <code className="language-jsx">{title3}</code>
              </>
            )}
          </pre>
        </div>
        <div className="part">
          <div className="part-one">
            <p className="part-one-paragraph">Après une dizaine d'années d'animation socio-culturelle dans le milieu associatif, l'heure du changement a sonné ! Formé par l'école O'clock au métier de développeur web avec une spécialité React.JS, il est temps pour moi de mettre en fusion mes softs skills acquis durant mon parcours, et les hards skills appris à force de pratique.</p>

            <div className="part-two">
              <div className="part-two-skills">
                <div className="part-two-words">
                  <div className="part-two-words-single">Autonomie  /  Curiosité  /  Résolution de problèmes  /  Esprit  d'équipe  /  Transmission</div>
                </div>

                <IconContext.Provider value={{ size: '1.7em' }}>
                  <div className="part-two-icones">
                    <div className="part-two-icones-di-group">
                      <SiJavascript className="part-two-icones-di" />
                      <SiReact className="part-two-icones-di" />
                      <SiTypescript className="part-two-icones-di" />
                      <SiRedux className="part-two-icones-di" />
                      <SiGit className="part-two-icones-di" />
                      <SiGithub className="part-two-icones-di" />
                      <SiAdobeillustrator className="part-two-icones-di" />
                    </div>
                  </div>
                </IconContext.Provider>
              </div>

              <div className="part-two-cv">
                <a
                  href="https://drive.google.com/file/d/1wuN1Euy28NKjC38S0VX-GimQLSLv-OgB/view?usp=share_link"
                  target="_blank"
                >
                  <div className="part-two-cv-carre1" />
                  <div className="part-two-cv-carre2" />
                  <div className="part-two-cv-carre3" />
                  <div className="part-two-cv-text"><span>C.V</span></div>
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </Fade>
  );
}

// == Export
export default AboutMe;

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
import { useEffect } from 'react';
import Prism from 'prismjs';
import { Fade } from 'react-reveal';

// JS, React, TS, Redux, Git, Github, VSCode, Illustrator

// == Composant
function AboutMe() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const title = 'class Julien extends Le.Rouzic {';
  const title2 = '  \'Développeur web\'';
  const title3 = '};';

  return (
    <Fade up>
      <div className="aboutMe">
        <div className="dev-title">
          <pre>
            <code className="language-jsx">{title}</code><br />
            <code className="language-jsx">{title2}</code><br />
            <code className="language-jsx">{title3}</code>
          </pre>
        </div>
        <div className="part">
          <div className="part-one">
            <p className="part-one-paragraph">Après une dizaine d'années d'animation socio-culturelle dans le milieu associatif, l'heure du changement a sonné ! Formé par l'école O'clock au métier de développeur web avec une spécialité React.JS, il est temps pour moi de mettre en fusion mes softs skills acquis durant mon parcours, et les hards skills appris à force de pratique.</p>

            <div className="part-two">
              <div className="part-two-skills">
                <div className="part-two-words">
                  <div className="part-two-words-single-title">Soft skills:</div>
                  <div className="part-two-words-single">Autonomie  /  Curiosité  /  Résolution de problèmes  /  Esprit  d'équipe  /  Transmission</div>
                </div>

                <IconContext.Provider value={{ color: '#ad92ff', size: '2em' }}>
                  <div className="part-two-icones">
                    <div className="part-two-icones-di-title">Hard skills:</div>
                    <div className="part-two-icones-di-group">
                      <SiReact className="part-two-icones-di" />
                      <SiJavascript className="part-two-icones-di" />
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
                  <div className="part-two-cv-text">C.V.</div>
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

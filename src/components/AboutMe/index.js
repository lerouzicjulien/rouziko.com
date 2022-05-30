/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable max-len */

import './styles.scss';
import { IconContext } from 'react-icons';
import {
  DiCss3,
  DiGit,
  DiGithubBadge,
  DiHtml5,
  DiIllustrator,
  DiJsBadge,
  DiPhp,
  DiReact,
  DiSass,
  DiVisualstudio,
} from 'react-icons/di';

import { useEffect } from 'react';
import Prism from 'prismjs';

import cv from 'src/assets/images/CV-RZK-dark.jpg';
import { Fade } from 'react-reveal';

// == Composant
function AboutMe() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const title = 'class Julien extends Le.Rouzic {\'Développeur web\'};';
  // const softskills = 'let softskills = ["Autonomie", "Curiosité", "Résolution de problèmes",  "Esprit  d\'équipe", "Transmission"];';
  return (
    <div className="aboutMe">
      <Fade down>
        <div className="dev-title">
          <pre>
            <code className="language-jsx">{title}</code>
          </pre>
        </div>
      </Fade>
      <Fade up distance="17%">
        <div className="part">
          <div className="part-one">
            <p className="part-one-paragraph">Après une dizaine d'années d'animation socio-culturelle dans le milieu associatif, l'heure du changement a sonné ! Formé par l'école O'clock au métier de développeur web avec une spécialité React.JS, il est temps pour moi de mettre en fusion mes softs skills acquis dans mon parcours avec les hards skills appris à force de pratique.</p>
            <div className="part-one-words">
              {/* <pre>
                <code className="language-jsx">{softskills}</code>
              </pre> */}
              <div className="part-one-words-single-title">Soft skills:</div>
              <div className="part-one-words-single">Autonomie  /  Curiosité  /  Résolution de problèmes  /  Esprit  d'équipe  /  Transmission</div>
            </div>

            <IconContext.Provider value={{ color: '#ad92ff', size: '2em' }}>
              <div className="part-one-icones">
                <div className="part-one-icones-di-title">Hard skills:</div>
                <DiHtml5 className="part-one-icones-di" />
                <DiCss3 className="part-one-icones-di" />
                <DiJsBadge className="part-one-icones-di" />
                <DiReact className="part-one-icones-di" />
                <DiSass className="part-one-icones-di" />
                <DiPhp className="part-one-icones-di" />
                <DiGit className="part-one-icones-di" />
                <DiGithubBadge className="part-one-icones-di" />
                <DiVisualstudio className="part-one-icones-di" />
                <DiIllustrator className="part-one-icones-di" />
              </div>
            </IconContext.Provider>

          </div>
          <div className="part-two-cv">
            <div className="part-two-cv-carre1" />
            <div className="part-two-cv-carre2" />
            <div className="part-two-cv-carre3" />
            <a href={cv} rel="noopener noreferrer" target="_blank"><img className="part-two-cv-image" src={cv} alt="cv" /></a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

// == Export
export default AboutMe;

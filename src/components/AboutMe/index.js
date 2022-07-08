/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable max-len */

import './styles.scss';
import { IconContext } from 'react-icons';
import {
  DiCss3,
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
import { Flip } from 'react-reveal';

// == Composant
function AboutMe() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const title = 'class Julien extends Le.Rouzic {';
  const title2 = '  \'Développeur web\'';
  const title3 = '};';

  return (
    <div className="aboutMe">
      <Flip left>
        <div className="dev-title">
          <pre>
            <code className="language-jsx">{title}</code><br />
            <code className="language-jsx">{title2}</code><br />
            <code className="language-jsx">{title3}</code>
          </pre>
        </div>
      </Flip>
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
                  <DiHtml5 className="part-two-icones-di" />
                  <DiCss3 className="part-two-icones-di" />
                  <DiJsBadge className="part-two-icones-di" />
                  <DiReact className="part-two-icones-di" />
                  <DiSass className="part-two-icones-di" />
                  <DiPhp className="part-two-icones-di" />
                  <DiGithubBadge className="part-two-icones-di" />
                  <DiVisualstudio className="part-two-icones-di" />
                  <DiIllustrator className="part-two-icones-di" />
                </div>
              </IconContext.Provider>
            </div>

            <div className="part-two-cv">
              <a
                href="https://drive.google.com/file/d/1F6zQA7EY-07idSsAVIkcenuDdaDbzmrR/view?usp=sharing"
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
  );
}

// == Export
export default AboutMe;

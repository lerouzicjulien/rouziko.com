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

// == Composant
function AboutMe() {
  return (
    <div className="aboutMe">
      <h1 className="dev-title">Développeur web</h1>
      <div className="part-one">
        <p className="part-one-paragraph">Après une dizaine d'année d'animation socio-culturelle dans le milieu associatif, l'heure du changement a sonné ! Formé par l'école O'clock au métier de développeur web avec une spécialité react, il est tant pour moi de mettre un fusion mes softs skills acqui dans mon parcours avec les hards skills appris à force de pratique.</p>
      </div>
      <div className="part-two">
        <div className="part-two-words part-two-words-title">Soft skills:</div>
        <div className="part-two-words">Fält</div>
        <div className="part-two-words">Koffein</div>
        <div className="part-two-words">Jag Hatar</div>
        <div className="part-two-words">Ankel</div>
        <div className="part-two-words">Räfflor</div>
        <div className="part-two-words">Konsonanten</div>
        <div className="part-two-words">Klyftan</div>
      </div>
      <IconContext.Provider value={{ color: '#ad92ff', size: '2em' }}>
        <div className="icones">
          <div className="icones-di icones-di-title">Soft skills:</div>
          <DiHtml5 className="icones-di" />
          <DiCss3 className="icones-di" />
          <DiJsBadge className="icones-di" />
          <DiReact className="icones-di" />
          <DiSass className="icones-di" />
          <DiPhp className="icones-di" />
          <DiGit className="icones-di" />
          <DiGithubBadge className="icones-di" />
          <DiVisualstudio className="icones-di" />
          <DiIllustrator className="icones-di" />
        </div>
      </IconContext.Provider>
    </div>
  );
}

// == Export
export default AboutMe;

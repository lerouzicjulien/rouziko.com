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
      <span className="aboutMe-title">
        <h1>About me</h1>
      </span>
      <div className="dev-title">Développeur web</div>
      <div className="part-one">
        <p className="part-one-paragraph">Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No?</p>
        {/* <img src={avatar} alt="avatar-rouziko" className="part-one-avatar" /> */}
        <div className="part-one-reconvesion">
          <h3 className="part-one-reconversion-title">Reconversion</h3>
          <p className="part-one-reconversion-p">My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?</p>
        </div>
      </div>
      <div className="part-two">
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

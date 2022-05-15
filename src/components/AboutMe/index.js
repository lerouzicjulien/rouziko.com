/* eslint-disable max-len */
import './styles.scss';
import avatar from '../../assets/images/avatar-Rouziko-sansFond.png';
import html from '../../assets/images/Icon/html.png';
import css from '../../assets/images/Icon/css.png';
import git from '../../assets/images/Icon/git.png';
import github from '../../assets/images/Icon/github.png';
import js from '../../assets/images/Icon/js.png';
import linkedin from '../../assets/images/Icon/linkedin.png';
import mariadb from '../../assets/images/Icon/mariadb.png';
import npm from '../../assets/images/Icon/npm.png';
import Octocat from '../../assets/images/Icon/Octocat.png';
import php from '../../assets/images/Icon/php.png';
import react from '../../assets/images/Icon/react.png';
import mail from '../../assets/images/Icon/mail.png';

// == Composant
function AboutMe() {
  return (
    <div className="aboutMe">
      <h1>About me</h1>
      <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No?</p>
      <img src={avatar} alt="avatar-rouziko" />
      <div className="reconvesion">
        <h3 className="reconversion-title">Reconversion</h3>
        <p className="reconversion-p">My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?</p>
      </div>
      <div className="icones">
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={js} alt="js" />
        <img src={react} alt="react" />
        <img src={php} alt="php" />
        <img src={git} alt="git" />
        <img src={github} alt="github" />
        <img src={npm} alt="npm" />
        <img src={mariadb} alt="mariadb" />
      </div>
    </div>
  );
}

// == Export
export default AboutMe;

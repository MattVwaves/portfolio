import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

export default function SkillsList() {
  return (
    <>
      <ul className="skills-list-container">
        <li>
          <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
        </li>
        <li>
          <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
        </li>
        <li>
          <FontAwesomeIcon icon={faJs} className="skill-icon" />
        </li>
        <li>
          <FontAwesomeIcon icon={faReact} className="skill-icon" />
        </li>
        <li>
          <img
            src={require('../assets/nodejs.png')}
            className="skill-icon"
            alt="node-icon"
          />
        </li>
        <li>
          <img
            src={require('../assets/express-logo-2.png')}
            className="skill-icon"
            alt="express-icon"
          />
        </li>
        <li>
          <img
            src={require('../assets/prisma.png')}
            className="skill-icon"
            alt="prisma-icon"
          />
        </li>
        <li>
          <img
            src={require('../assets/postgres2.png')}
            className="skill-icon"
            alt="postgres-icon"
          />
        </li>
      </ul>
    </>
  );
}

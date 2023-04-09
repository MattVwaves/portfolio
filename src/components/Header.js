import { useState } from 'react';

import SocialList from './SocialList';
import SkillsList from './SkillsList';

export default function Header() {
  const [showEmail, setShowEmail] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const handleShowEmail = () => {
    setShowEmail(!showEmail);
  };
  const handleShowSkills = () => {
    setShowSkills(!showSkills);
  };
  return (
    <div className="header">
      <h3 className="title">Matt Holt</h3>
      <h2 className="profession">
        Full-Stack
        <br />
        Developer
      </h2>

      {showEmail && (
        <div>
          <p className="email">jamesmattholt@gmail.com</p>
        </div>
      )}

      <ul className="photo-skills">
        <li>
          <img
            src={require('../assets/close-me-bw.jpg')}
            alt="matt"
            id="photo-matt"
          />
          {/* <img
            id="photo-matt-inv"
            src={require('../assets/close-me-bw.jpg')}
            height="150px"
            alt="photo-matt"
          /> */}
        </li>
        <li id="skills-icon">
          <img
            src={require('../assets/skills.jpeg')}
            height="40px"
            alt="skills"
            onClick={handleShowSkills}
          />
        </li>
        <SocialList handleShowEmail={handleShowEmail} />
        {showSkills && <SkillsList />}
      </ul>
    </div>
  );
}

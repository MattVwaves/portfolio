import { useState } from 'react';

export default function ProjectTitleContainer({ info, title }) {
  const [showInfo, setShowInfo] = useState(false);
  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className="project-title-container">
      <h2 id="project-title">{title}</h2>
      {title !== 'eyesong' && title !== 'an alien Hampsfellian' && (
        <p>
          hover <br />
          over video
          <br />
          to play
        </p>
      )}

      <span>
        <img
          src={require('../assets/info.png')}
          height="20px"
          id="info-icon"
          alt="info-icon"
          onClick={handleShowInfo}
        />
      </span>
      <span>
        {title === 'eyesong' && (
          <>
            <a href="https://eyesong-client.onrender.com/">
              <p id="live-text">LIVE!!!</p>

              {/* <img src={require('../assets/live.png')} id="live" /> */}
            </a>
          </>
        )}
      </span>
      {showInfo && <div className="project-details-popup">{info}</div>}
    </div>
  );
}

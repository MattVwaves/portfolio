import { useState } from 'react';
import Youtube from 'react-youtube';

import './App.css';
import './Eye.css';
// import OhDearTimes from './assets/videos/Oh-dear-times_HB.mp4';
import PatchesVideo2 from './assets/videos/TFA-tidy-demo_HB.mp4';
import Cats from './assets/videos/cats-complete_HB.mp4';
import TfaPoster from './assets/tfa-poster.png';
import odt from './assets/videos/odt.mp4';

import Header from './components/Header';
import RepoLinks from './components/RepoLinks';
import ProjectTitleContainer from './components/ProjectTitleContainer';

import TFAInfo from './components/TFAInfo';
import PSInfo from './components/PSInfo';
import HampsfellInfo from './components/HampsfellInfo';
import OdtInfo from './components/OdtInfo';
import CatsInfo from './components/CatsInfo';
import PFInfo from './components/PFInfo';
import SocialList from './components/SocialList';
import Eye from './components/Eye';

function App() {
  const [showTfaControls, setShowTfaControls] = useState(false);
  const [showOdtControls, setShowOdtControls] = useState(false);
  const [showCatsControls, setShowCatsControls] = useState(false);

  const handleShowControls = (e) => {};

  const opts = {
    height: '177',
    width: '175',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
    },
  };

  return (
    <>
      <meta
        meta
        name="viewport"
        content="width=device-width, user-scalable=no"
      />
      <img
        id="bg-img"
        src={require('./assets/me-pointing.jpg')}
        alt="bg-img"
        height="500px"
      />
      <img
        id="bg-img-2"
        src={require('./assets/close-me-bw.jpg')}
        alt="bg-img"
        height="500px"
      />
      <Header />
      <div className="projects-title-container">
        <h3 id="projects-title">Projects</h3>
      </div>

      <div className="outer-projects-container">
        <div className="projects-container">
          <div className="project-container">
            <ProjectTitleContainer
              info={<TFAInfo />}
              title="That French Artist"
            />
            <div className="video-container">
              <video
                controls={showTfaControls}
                playsinline
                onMouseEnter={() => setShowTfaControls(true)}
                onMouseLeave={() => setShowTfaControls(false)}
              >
                <source src={`${PatchesVideo2}#t=0.001`} type="video/mp4" />
              </video>
              <RepoLinks
                clientUrl="https://github.com/MattVwaves/That-French-Artist-Client"
                serverUrl="https://github.com/MattVwaves/That-French-Artist-Server"
              />
            </div>
          </div>

          <div className="project-container">
            <ProjectTitleContainer info={<PSInfo />} title="eyesong" />
            <div className="video-container">
              <Eye />
              <RepoLinks
                clientUrl="https://github.com/MattVwaves/eyesong-client"
                serverUrl="https://github.com/MattVwaves/eyesong-server"
              />
            </div>
          </div>

          <div className="project-container">
            <ProjectTitleContainer
              info={<HampsfellInfo />}
              title={'an alien Hampsfellian'}
            />
            <div className="video-container">
              <Youtube
                controls={showOdtControls}
                playsinline
                muted
                autoplay
                videoId="2JoAbTjx3WE"
                opts={opts}
              />
              {/* <source src={`${Hampsfell}#t=0.001`} type="video/mp4" /> */}
            </div>
          </div>

          <div className="project-container">
            <ProjectTitleContainer info={<OdtInfo />} title="Oh Dear Times" />
            <div className="video-container">
              <video
                controls={showOdtControls}
                playsinline
                muted
                autoplay
                onMouseEnter={() => setShowOdtControls(true)}
                onMouseLeave={() => setShowOdtControls(false)}
              >
                <source src={odt} type="video/mp4" />
              </video>
              {/* <RepoLinks
                clientUrl="https://github.com/MattVwaves/That-French-Artist-Client"
                serverUrl="https://github.com/MattVwaves/That-French-Artist-Server"
              /> */}
            </div>
          </div>
          <div className="project-container">
            <ProjectTitleContainer
              info={<CatsInfo />}
              title="les chats dans la nouvelle maison"
            />
            <div className="video-container">
              <video
                controls={showCatsControls}
                playsinline
                muted
                autoplay
                onMouseEnter={() => setShowCatsControls(true)}
                onMouseLeave={() => setShowCatsControls(false)}
              >
                <source src={`${Cats}#t=0.001`} type="video/mp4" />
              </video>
              {/* <RepoLinks
                clientUrl="https://github.com/MattVwaves/That-French-Artist-Client"
                serverUrl="https://github.com/MattVwaves/That-French-Artist-Server"
              /> */}
            </div>
          </div>

          {/* <div className="project-container">
            <ProjectTitleContainer info={<PFInfo />} title="Portfolio" />
            <div className="video-container">
              <img
                width="100%"
                height="450px"
                src={require('./assets/portnew.png')}
                alt="pop-shiester-img"
              />
              <RepoLinks clientUrl="https://github.com/MattVwaves/portfolio-2" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;

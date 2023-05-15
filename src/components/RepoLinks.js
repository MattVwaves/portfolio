export default function RepoLinks({ liveUrl, githubUrl }) {
  return (
    <div className="repo-links-container">
      <div className="repo-links">
        <div className="repo-link">
          <a href={liveUrl} target="_blank">
            live
          </a>
          <a href={liveUrl} target="_blank">
            <img
              src={require('../assets/live.png')}
              height="35px"
              alt="github-icon"
            />
          </a>
        </div>
        {githubUrl && (
          <div className="repo-link">
            <a href={githubUrl} target="_blank">
              github
            </a>
            <a href={githubUrl} target="_blank">
              <img
                src={require('../assets/github.png')}
                height="35px"
                alt="github-icon"
              />
            </a>
          </div>
        )}
      </div>
      <div className="repo-links-under"></div>
    </div>
  );
}

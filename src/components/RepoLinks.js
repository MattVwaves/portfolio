export default function RepoLinks({ clientUrl, serverUrl }) {
  return (
    <div className="repo-links-container">
      <div className="repo-links">
        <div className="repo-link">
          <a href={clientUrl}>client</a>
          <a href={clientUrl}>
            <img
              src={require('../assets/github.png')}
              height="35px"
              alt="github-icon"
            />
          </a>
        </div>
        {serverUrl && (
          <div className="repo-link">
            <a href={serverUrl}>server</a>
            <a href={serverUrl}>
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

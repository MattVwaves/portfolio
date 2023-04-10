export default function RepoLinks({ clientUrl, serverUrl }) {
  return (
    <div className="repo-links-container">
      <div className="repo-links">
        <div className="repo-link">
          <a href={clientUrl} target="_blank">
            client
          </a>
          <a href={clientUrl} target="_blank">
            <img
              src={require('../assets/github.png')}
              height="35px"
              alt="github-icon"
            />
          </a>
        </div>
        {serverUrl && (
          <div className="repo-link">
            <a href={serverUrl} target="_blank">
              server
            </a>
            <a href={serverUrl} target="_blank">
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

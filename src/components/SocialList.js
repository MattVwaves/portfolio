export default function SocialList({ handleShowEmail }) {
  return (
    <ul className="social-email">
      <li>
        <a href="https://github.com/MattVwaves">
          <img
            src={require('../assets/github.png')}
            height="35px"
            alt="github-icon"
          />
        </a>
      </li>
      <li>
        <a href="https://github.com/MattVwaves">
          <img
            src={require('../assets/linkd.png')}
            height="30px"
            alt="linkedIn-icon"
          />
        </a>
      </li>
      <li>
        <span>
          <img
            id="email-icon"
            src={require('../assets/email2.png')}
            height="25px"
            alt="email-icon"
            onClick={handleShowEmail}
          />
        </span>
      </li>
    </ul>
  );
}

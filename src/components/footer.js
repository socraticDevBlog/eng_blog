import React from "react"
import TwitterLogo from "../images/twitter.png"
import GithubLogo from "../images/github.png"
import GitlabLogo from "../images/gitlab.png"
import MastadonLogo from "../images/mastadon48x48.png"

const Footer = () => (
  <div className="site-footer">
    <p>SocraticDev elsewhere on the web</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            className=""
            title="https://github.com/socraticDevBlog/"
            href="https://github.com/socraticDevBlog/"
            rel="noopener noreferrer"
            target="_blank"
            alt="url to my Github page"
          >
            <img
              src={GithubLogo}
              alt="github logo"
              className="socialMediaLogo"
            ></img>
          </a>
        </li>
        <li>
          <a
            className=""
            title="https://gitlab.com/socraticdev/"
            href="https://gitlab.com/socraticdev/"
            rel="noopener noreferrer"
            target="_blank"
            alt="url to my gitLab page"
          >
            <img
              src={GitlabLogo}
              alt="gitlab logo"
              className="socialMediaLogo"
            ></img>
          </a>
        </li>
        <li>
          <a
            className=""
            title="https://mastodon.social/@socdev"
            href="https://mastodon.social/@socdev"
            rel="noopener noreferrer"
            target="_blank"
            alt="lien vers ma page mastadon"
          >
            <img
              src={MastadonLogo}
              alt="mastadon logo"
              className="socialMediaLogo"
            ></img>
          </a>
        </li>
        <li>
          <a
            className=""
            title="https://twitter.com/socraticdevblog"
            href="https://twitter.com/socraticdevblog"
            rel="noopener noreferrer"
            target="_blank"
            alt="url to my Twitter page"
          >
            <img
              src={TwitterLogo}
              alt="twitter logo"
              className="socialMediaLogo"
            ></img>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer

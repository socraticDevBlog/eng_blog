import React from "react"
import TwitterLogo from "../images/twitter.png"
import LinkedinLogo from "../images/linkedin.png"
import GithubLogo from "../images/github.png"
import GitlabLogo from "../images/gitlab.png"
import MaxHomepageLogo from "../images/homepage.png"

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
            title="gitlab.com/socraticdev/"
            href="gitlab.com/socraticdev/"
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
            title="https://www.linkedin.com/in/boninmaxime/?locale=en_US"
            href="https://www.linkedin.com/in/boninmaxime/?locale=en_US"
            rel="noopener noreferrer"
            target="_blank"
            alt="url to my LinkedIn page"
          >
            <img
              src={LinkedinLogo}
              alt="linkedIn logo"
              className="google"
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
        <li>
          <a
            className=""
            title="https://en.maximebonin.dev"
            href="https://en.maximebonin.dev"
            rel="noopener noreferrer"
            target="_blank"
            alt="url to my personal homepage"
          >
            <img
              src={MaxHomepageLogo}
              alt="Max Homepage logo"
              className="socialMediaLogo"
            ></img>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer

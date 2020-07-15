import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/head.svg"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <Navbar fixed="top" light expand="sm">
        <div className="container">
          <NavbarBrand href="/" title="Home">
            <img
              class="mr-2"
              src={Logo}
              width="30"
              height="30"
              alt="head logo"
            />
            {this.props.siteTitle}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about" title="About">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tags" title="Topics">
                  Topics
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/disclaimer" title="Disclaimer">
                  Disclaimer
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink title="subscribe to RSS Feed" href="/rss.xml">
                  RSS
                  <span aria-label="subscription to RSS feed" role="img">
                    💌{" "}
                  </span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://socratic.dev"
                  title="Vers le site en français"
                >
                  <span
                    aria-label="visit site in french"
                    title="Vers le site en français"
                    role="img"
                  >
                    🇫🇷
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

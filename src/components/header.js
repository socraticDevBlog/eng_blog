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
                <NavLink href="/about" title="about">
                  about
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tags" title="topics">
                  topics
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/disclaimer" title="disclaimer">
                  disclaimer
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/rss.xml" title="subscribe to RSS feed">
                  rss
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://socratic.dev"
                  title="Vers le site en français"
                  id="lang-toggle-icon"
                >
                  français
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

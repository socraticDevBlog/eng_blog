import PropTypes from "prop-types"
import React from "react"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar fixed="top" light expand="sm">
        <div className="container">
            <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/tags">Topics</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/disclaimer">Disclaimer</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/rss.xml">
                  RSS
                  <span aria-label="abonnement au fil RSS">💌 </span>
                </NavLink>
              </NavItem>
                <NavItem>
                  <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://socratic.dev">
                    <span aria-label="visitez le site en français">
                    🇫🇷
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            </div>
          </Navbar>
    );
  }
}
  
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

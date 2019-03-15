import React, { Component } from "react";

import { AppBar, Button, Toolbar } from "@material-ui/core";

import { Link } from "react-router-dom";
import {IndiaLogo} from '../ui/icons';

class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#007bd5",
          boxShadow: "none",
          padding: "10px 0",
          borderBottom: "2px solid #00285e"
        }}
      >
        <Toolbar style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <div className="header_logo">
              <IndiaLogo
                link={true}
                linkTo="/"
                width="70px"
                height="70px"

              />
            </div>
          </div>
          <Link to="/the_team">
            <Button color="inherit">The team</Button>
          </Link>

          <Link to="/matches">
            <Button color="inherit">Matches</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;

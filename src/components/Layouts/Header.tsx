import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

interface HeaderProps {}

function Header(props: HeaderProps) {
  return (
    <>
      <div className="top">
        <div className="inner">
          <a href="" className="logo">
            <img src="" alt="logo" width="50" />
          </a>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts" activeClassName="active">
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default withRouter(Header);

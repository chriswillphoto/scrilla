import React from 'react';
import './Menu.css';

const Menu = (props) => {
  return (
    <div className={"splash " + (props.splashActive ? "" : "shrink")}>
      <div className={"splash-words " + (props.splashActive ? "" : "hide")}>
        <h1 id="title">Scrillas</h1>
        <h2>Visualise where your money goes</h2>
        <button onClick={props.shrinkMenu}>Let's Go</button>
      </div>
      <div className="linkage">
        {props.loggedIn && <a href="">My Profile</a>}
        {props.loggedIn && <a href="">Logout</a>}
        {!props.loggedIn && <a href="/#/signup">Signup</a>}
        {!props.loggedIn && <a href="/#/login">SignIn</a>}
      </div>
    </div>
  );
};

export default Menu;

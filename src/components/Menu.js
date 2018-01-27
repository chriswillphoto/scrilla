import React from 'react';
import './Menu.css';

const Menu = (props) => {
  return (
    <div className={"splash " + (props.splashActive ? "" : "shrink")}>
      <div className={"splash-words " + (props.splashActive ? "" : "hide")}>
        <h1 id="title">Scrilla</h1>
        <h2>Visualise where your money goes</h2>
        <button onClick={props.shrinkMenu}>Let's Go</button>
      </div>
      <div className="linkage">
        {props.loggedIn && <a href="">Logout</a>}
        <h5>Signup</h5>
      </div>
    </div>
  );
};

export default Menu;

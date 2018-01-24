import React, { PureComponent as Component } from 'react';
import './Menu.css'

export default class Menu extends Component {
  render() {
    return (
      <div className="splash">
        <div className='splash-words'>
          <h1 id="title">Scrilla</h1>
          <h2>Visualise where your money goes</h2>
        </div>
      </div>
    );
  }
}

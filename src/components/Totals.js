import React, { PureComponent as Component } from 'react';
import './Totals.css';

const roundTo = (number, places = 2) => {
  const m = Math.pow(10, places);
  return Math.floor(number * m) / m;
};

class Totals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeframe: 'Monthly',
    };
  }
  timing() {
    if(this.props.timeframe === "Monthly"){
      return "Fortnightly"
    }else if(this.props.timeframe === "Fortnightly"){
      return "Weekly"
    }else {
      return "Monthly"
    }
  }

  _timeChange() {
    this.props.timing(this.timing())
  }

  render() {
    return (
      <div className="totals" key={this.props.totals.length}>
        <hr />
        <h5>
          <button onClick={() => this._timeChange()}>
            {this.props.timeframe}
          </button>{' '}
          Totals:
        </h5>
        <h5>
          ${roundTo(
            this.props.totals.reduce(function(totes, i) {
              return totes + i;
            })
          )}
        </h5>
      </div>
    );
  }
}

export default Totals;

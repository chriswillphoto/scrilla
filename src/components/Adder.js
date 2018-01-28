import React, { PureComponent as Component } from 'react';
import './Adder.css';

class Adder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      button: 'Monthly',
      amount: '',
      id: 1,
    };
  }

  _nameHandle(e) {
    this.setState({ name: e.target.value });
  }

  _amountHandle(e) {
    this.setState({ amount: e.target.value });
  }

  _addToList(e) {
    e.preventDefault()
    this.props.addItem({
      name: this.state.name,
      recurrence: this.state.button,
      amount: parseFloat(this.state.amount),
      id: this.state.id,
    });
    this.setState({
      name: '',
      button: 'Monthly',
      amount: '',
      id: this.state.id + 1,
    });
  }

  buttonChange(e) {
    e.preventDefault()
    if (this.state.button === 'Monthly') {
      this.setState({ button: 'Fortnightly' });
    } else if (this.state.button === 'Fortnightly') {
      this.setState({ button: 'Weekly' });
    } else {
      this.setState({ button: 'Monthly' });
    }
  }

  render() {
    return (
      <div className="adder-container">
        <h2>Add to your Bùdgét</h2>
        <div className="instructions">
          <h6>The Thing You're Paying</h6>
          <h6>How Often You're Pay For It</h6>
          <h6>How Much You're Paying For It</h6>

        </div>
        <form onSubmit={(e) => this._addToList(e)} className='formy'>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this._nameHandle(e)}
          required
          placeholder="Name"
        />

        <button
          value={this.state.button}
          onClick={(e) => this.buttonChange(e)}
          className="time-button"
          name="recurrence"
          type="button"
        >
          {this.state.button}
        </button>

        <input
          type="number"
          step="any"
          min="0"
          value={this.state.amount}
          onChange={(e) => this._amountHandle(e)}
          placeholder="$Amount"
          required
        />

        <button type="submit">Add</button>
      </form>
      </div>
    );
  }
}

export default Adder;

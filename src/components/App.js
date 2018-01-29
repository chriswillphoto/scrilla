import React, { PureComponent as Component } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import randomColor from 'randomcolor';
import './App.css';

import Menu from './Menu';
// import Viewer from './Viewer';
import BudgetItem from './BudgetItem';
import Adder from './Adder';
import Totals from './Totals';

// const roundTo = (number, places = 2) => {
//   const m = Math.pow(10, places);
//   return Math.floor(number * m) / m;
// };

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      splash: true,
      items: [],
      totals: [],
      viewing: [],
      timeframe: 'Monthly',
      chart: 'Pie',
      chartOptions: {
        legend: { display: false },
        title: { display: true, text: 'Subscriptions + Billables' },
        maintainAspectRatio: false,
      },
      data: {
        datasets: [
          {
            data: [],
            backgroundColor: [],
          },
        ],
        labels: [],
      },
    };
  }

  shrinkMenu() {
    this.setState({ splash: false });
  }

  addItem(i) {
    this.setState(
      {
        items: [...this.state.items, i],
      },
      function() {
        this.setState({
          totals: this.totaler(),
          viewing: this.totaler(),
          timeframe: 'Monthly',
          data: {
            datasets: [
              {
                data: this.totaler(),
                backgroundColor: [
                  ...this.state.data.datasets[0].backgroundColor,
                  randomColor(),
                ],
              },
            ],
            labels: [...this.state.data.labels, i.name],
          },
        });
      }
    );
  }

  totaler() {
    return this.state.items.map((i) => {
      if (i.recurrence === 'Monthly') {
        return i.amount;
      } else if (i.recurrence === 'Fortnightly') {
        return i.amount * 2;
      } else {
        return i.amount * 4;
      }
    });
  }

  changeTotals(m) {
    if (m === 'Fortnightly') {
      this.setState({
        viewing: this.state.totals.map((i) => {
          return i / 2;
        }),
        timeframe: m,
        data: {
          datasets: [
            {
              data: this.state.totals.map((i) => {
                return i / 2;
              }),
              backgroundColor: this.state.data.datasets[0].backgroundColor,
            },
          ],
          labels: this.state.data.labels,
        },
      });
    } else if (m === 'Weekly') {
      this.setState({
        viewing: this.state.totals.map((i) => {
          return i / 4;
        }),
        timeframe: m,
        data: {
          datasets: [
            {
              data: this.state.totals.map((i) => {
                return i / 4;
              }),
              backgroundColor: this.state.data.datasets[0].backgroundColor,
            },
          ],
          labels: this.state.data.labels,
        },
      });
    } else {
      this.setState({
        viewing: this.state.totals,
        timeframe: m,
        data: {
          datasets: [
            {
              data: this.totaler(),
              backgroundColor: this.state.data.datasets[0].backgroundColor,
            },
          ],
          labels: this.state.data.labels,
        },
      });
    }
  }

  chartSelect() {
    if (this.state.chart === 'Pie') {
      this.setState({ chart: 'Bar' });
    } else {
      this.setState({ chart: 'Pie' });
    }
  }

  buttonText() {
    if (this.state.chart === 'Pie') {
      return 'Change to Bar Graph';
    } else {
      return 'Change to Pie Graph';
    }
  }

  render() {
    return (
      <div className="App">
        <Menu
          loggedIn={this.state.loggedIn}
          shrinkMenu={() => this.shrinkMenu()}
          splashActive={this.state.splash}
        />
        <Adder addItem={(i) => this.addItem(i)} />
        <div className="viewer">
          {this.state.items &&
            this.state.items.map((i) => {
              return <BudgetItem item={i} key={i.id} />;
            })}
        </div>
        {this.state.totals.length > 0 && (
          <Totals
            timing={(measure) => this.changeTotals(measure)}
            totals={this.state.viewing}
            timeframe={this.state.timeframe}
          />
        )}
        <div className="graph">
          {this.state.items.length > 0 && (
            <button
              className="graph-button"
              title="Switch to a bar graph"
              onClick={() => {
                this.chartSelect();
              }}
            >
              {this.buttonText()}
            </button>
          )}
          {this.state.items.length > 0 &&
            this.state.chart === 'Pie' && (
              <Pie
                data={this.state.data}
                options={{
                  title: { display: true, text: 'Subscriptions + Billables' },
                  maintainAspectRatio: false,
                }}
              />
            )}
          {this.state.chart === 'Bar' && (
            <Bar data={this.state.data} options={this.state.chartOptions}/>
          )}


        </div>
      </div>
    );
  }
}

export default App;

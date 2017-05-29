import React, { Component } from 'react'
import UsersDropdown from './components/users_dropdown'
import HoursPerMonth from './components/daypicker'
import ApproveWeek from './components/approve_work'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>App-rove me!</h2>
        </div>
        <UsersDropdown />
        <HoursPerMonth />
        <ApproveWeek />
      </div>
    );
  }
}

export default App;

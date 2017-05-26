import React, { Component } from 'react'
import UsersDropdown from './components/users_dropdown'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>App-rove me!</h2>
        </div>
        <UsersDropdown />
      </div>
    );
  }
}

export default App;

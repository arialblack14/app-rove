import React, { Component } from 'react'
import UsersIndex from './components/users_index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>App-rove me!</h2>
        </div>
        <UsersIndex />
      </div>
    );
  }
}

export default App;

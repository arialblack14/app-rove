import React, { Component } from 'react'
import SelectUser from './components/select_user'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>App-rove me!</h2>
        </div>
        <SelectUser />
      </div>
    );
  }
}

export default App;

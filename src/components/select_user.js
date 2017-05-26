import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/index'

class SelectUser extends Component {
  componentWillMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>Hello from select user!</div>
    )
  }
}

export default connect(null, { fetchUsers })(SelectUser)

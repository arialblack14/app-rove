import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUsers }, dispatch)
}

export default connect(null, mapDispatchToProps)(SelectUser)

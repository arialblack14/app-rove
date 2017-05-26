import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/index'

class SelectUser extends Component {
  componentWillMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user => {
      console.log("user": user)
      return (
        <li key={user.username}>{user.username}</li>
      )
    })
  }

  render() {
    return (
      <ul>{this.renderUsers()}</ul>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users.all }
}

export default connect(mapStateToProps, { fetchUsers })(SelectUser)

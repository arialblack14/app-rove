import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers, fetchUser } from '../actions/index'

class UsersDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  componentWillMount() {
    this.props.fetchUsers()
  }

  handleChange(event) {
    const selectedUser = this.props.fetchUser(event.target.value)

    this.setState({
      value: selectedUser.id
    })
  }

  renderUsers() {
    return this.props.users.map(user => {
      return (
        <option key={user.username} value={user.id}>{user.username}</option>
      )
    })
  }

  render() {
    return (
      <form>
        <label>
          Select user:
            <select value={this.state.value} onChange={this.handleChange.bind(this)}>
              {this.renderUsers()}
            </select>
        </label>
      </form>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users: users.all,
    user: users.user }
}

export default connect(mapStateToProps, { fetchUsers, fetchUser })(UsersDropdown)

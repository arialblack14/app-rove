import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers, fetchUser } from '../actions/index'

class UsersDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.user || '' // fetch user or set to ''
    }
  }

  componentWillMount() {
    this.props.fetchUsers()
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    const selectedUser = this.props.fetchUser(this.state.value)
    console.log("User selected: ", this.state.value)
    event.preventDefault();
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
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Select user:
            <select
            value={this.state.value}
            onChange={this.handleChange.bind(this)}>
              {this.renderUsers()}
            </select>
        </label>
        <input type="submit" value="Submit" />
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

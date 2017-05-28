import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers, fetchUser, fetchMonthWork } from '../actions/index'

class UsersDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.selectedUser || 1 // fetch user or set to ''
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
    event.preventDefault()
    this.props.fetchUser(this.state.value)
      .then(res => {
        console.log("id of selected user: ", res.payload.data.id)
        console.log("selected user's name:", this.props.selectedUser.username)
      })
      .then(() => {
        const date = new Date()
        const month = date.getMonth() + 1 // add 1 so that month is not 0-indexed

        this.props.fetchMonthWork(month, this.props.selectedUser.id)
          .then(res => console.log("work done in month: ", this.props.month, " is ", res.payload))
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

function mapStateToProps({ users, months }) {
  return {
    users: users.all,
    selectedUser: users.selectedUser,
    monthSelected: months.monthSelected
  }
}

export default connect(mapStateToProps, { fetchUsers, fetchUser, fetchMonthWork })(UsersDropdown)

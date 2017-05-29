import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  approveWeek } from '../actions/index'

class ApproveWeek extends Component {
  handleClick(status) {
    console.log(this.props.approveWeek(this.props.monthSelected, this.props.selectedUser.id, status))
  }

  render() {
    return (
      <div>
        { !(this.props.selectedUser && this.props.monthSelected) ?
          "Please select user / month" :
          <div>
            <button class="approve-button" onClick={() => this.handleClick({ status: "approved" })}>Approve</button>
            <button class="reject-button" onClick={() => this.handleClick({ status: "rejected" })}>Reject</button>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps({ months, users }) {
  return {
    selectedUser: users.selectedUser,
    monthSelected: months.monthSelected,
    weeksOfMonth: months.weeksOfMonth,
    status: months.status
  }
}

export default connect(mapStateToProps, { approveWeek })(ApproveWeek)
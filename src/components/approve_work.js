import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  approveWeek } from '../actions/index'

class ApproveWeek extends Component {
  handleClick(status) {
    console.log(this.props.approveWeek(this.props.selectedWeekId, this.props.selectedUser.id, status))
  }

  render() {
    return (
      <div>
        { !(this.props.selectedUser && this.props.monthSelected) ?
          <div className="notes">Please select user / month</div> :
          <div>
            <button id="approve-button" onClick={() => this.handleClick({ status: "approved" })}>Approve</button>
            <button id="reject-button" onClick={() => this.handleClick({ status: "rejected" })}>Reject</button>
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
    selectedWeekId: months.selectedWeekId,
    status: months.status
  }
}

export default connect(mapStateToProps, { approveWeek })(ApproveWeek)

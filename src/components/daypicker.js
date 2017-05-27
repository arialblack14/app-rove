import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import { connect } from 'react-redux'
import _ from 'lodash'
import { fetchUser, fetchMonthWork } from '../actions/index'

import 'react-day-picker/lib/style.css'

class HoursPerMonth extends Component {

  shouldComponentUpdate(nextProps) {
    const selectedUser = this.props.selectedUser !== nextProps.selectedUser
    const month = this.props.month !== nextProps.month
    return selectedUser || month
  }

  showHours() {
    return this.props.fetchMonthWork(5, 2)
      .then(res => {
        console.log("hours per week: ", res.payload.data)
        _.mapKeys(res.payload.data.weeks.week_number, 'week_number')
      })
  }

  renderDay(day) {
    const date = day.getDate()
    const hoursWorked = () => this.showHours()

    return (
      <div>
        {date}
        <div className="Hours-Worked-List">
          {hoursWorked[date] &&
            hoursWorked[date].map((worked, i) => (
              <div key={i}>
                {worked} ({worked})
              </div>
            ))}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <DayPicker
          canChangeMonth={true}
          className="HoursWorked"
          renderDay={this.renderDay}
          showWeekNumbers
        />
      </div>
    )
  }
}

function mapStateToProps({ users , month }) {
  return {
    selectedUser: users.selectedUser,
    month: month.month
  }
}

export default connect(mapStateToProps, { fetchUser, fetchMonthWork })(HoursPerMonth)

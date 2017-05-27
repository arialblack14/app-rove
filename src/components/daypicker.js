import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import { connect } from 'react-redux'
import { fetchUser, fetchMonthWork } from '../actions/index'

import 'react-day-picker/lib/style.css'


class HoursPerMonth extends Component {
  handleChange() {
    console.log("Current month's work: ", this.props.fetchMonthWork(10, 2))
  }

  renderDay(day) {
    const date = day.getDate()

    return (
      <div>
        {date}
        <div className="Hours-Worked-List">
          {hoursPerMonth[date] &&
            hoursPerMonth[date].map((hoursWorked, i) => (
              <div key={i}>
                {hoursWorked.name} ({hoursWorked.age})
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
          onChange={() => this.handleChange()}
          canChangeMonth={true}
          className="HoursWorked"
          renderDay={this.renderDay}
          showWeekNumbers
        />
      </div>
    )
  }
}

function mapStateToProps(selectedUser = this.props.selectedUser, month) {
  return {
    selectedUser,
    month
  }
}

export default connect(mapStateToProps, { fetchUser, fetchMonthWork })(HoursPerMonth)

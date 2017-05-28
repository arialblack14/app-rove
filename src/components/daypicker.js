import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import { connect } from 'react-redux'
import { fetchUsers, fetchUser, fetchMonthWork } from '../actions/index'

import 'react-day-picker/lib/style.css'

class HoursPerMonth extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedDays: null,
      selectedWeek: null
    }
  }

  handleWeekClick(week, days, e) {
    e.target.blur();
    if (week === this.state.selectedWeek) {
      this.setState({
        selectedWeek: null,
        selectedDays: null,
      })
    } else {
      this.setState({
        selectedDays: days,
        selectedWeek: week + 1, // add 1 becuse of aurity different counting system
      })
    }
  }

  renderDay(day) {
    const date = day.getDate()

    return (
      <div>
        {date}
        <div className="Hours-Worked-List">

        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <DayPicker
          initialMonth={new Date()}
          selectedDays={this.state.selectedDays}
          onWeekClick={(week, days, e) => this.handleWeekClick(week, days, e)}
          canChangeMonth={true}
          className="HoursWorked"
          renderDay={(day) => this.renderDay(day)}
          showWeekNumbers
          fixedWeeks
        />
        <p>
          Selected week:
          {this.state.selectedWeek
            ? this.state.selectedWeek
            : '-'}
        </p>
      </div>
    )
  }
}

export default connect(null, { fetchUser, fetchMonthWork })(HoursPerMonth)

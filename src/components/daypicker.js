import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import { connect } from 'react-redux'
import { fetchUser, fetchMonthWork } from '../actions/index'

import 'react-day-picker/lib/style.css'

class HoursPerMonth extends Component {

  constructor(props) {
    super(props)

    this.state = {
      daySelected: null
    }
  }

  getWeeksPerMonth(month, user) {
    return this.props.fetchMonthWork(month, user)
      .then(res => {
        return res.payload.data.data.weeks
        // .map(week => {
        //   week.days_in_week.map(dayOfWeek => console.log(dayOfWeek.hours))
        // })
      })
  }

  handleWeekClick(week, days, e) {
    e.target.blur();
    if (week === this.state.selectedWeek) {
      this.setState({
        selectedWeek: undefined,
        selectedDays: undefined,
      })
      return
    }
    this.setState({
      selectedDays: days,
      selectedWeek: week + 1, // add 1 becuse of aurity different counting system
    });
  }

  showHours() {

  }

  renderDay(day) {
    const date = day.getDate()

    return (
      <div>
        {date}
        <div className="Hours-Worked-List">
          {this.showHours()}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <DayPicker
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

function mapStateToProps({ users , month }) {
  return {
    selectedUser: users.selectedUser,
    month: month.month
  }
}

export default connect(mapStateToProps, { fetchUser, fetchMonthWork })(HoursPerMonth)

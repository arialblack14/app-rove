import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import { connect } from 'react-redux'

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

  getHoursPerDay(date) {
    this.props.weeksOfMonth.map(({week_number, days_in_week}) => {
      days_in_week.map(({day_number, hours}) => {
        const result = { day_number, week_number, hours }
        // console.log("result: ", result)
        if (date === result.day_number) {
          console.log(result.hours + 'h')
        }
      })
    })
  }

  renderDay(day) {
    const date = day.getDate()

    return (
      <div>
        {date}
        <div className="Hours-Worked-List">
          {
            this.getHoursPerDay(date)
          }
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
        />
        <div>
          <p>
            Selected week:
            {this.state.selectedWeek
              ? this.state.selectedWeek - 1
              : '-'}
          </p>
          <div>
            Notes:
            <p>List of Approvers: {console.log("Approvers: ", this.props.monthSelected)}</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ months }) {
  return {
    monthSelected: months.monthSelected,
    weeksOfMonth: months.weeksOfMonth
  }
}

export default connect(mapStateToProps, null)(HoursPerMonth)

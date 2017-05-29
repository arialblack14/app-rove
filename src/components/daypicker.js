import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import { connect } from 'react-redux'
import {
  changeMonth,
  selectWeek,
  fetchUser,
  fetchMonthWork,
  fetchWeeks
} from '../actions/index'


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

    // get the week_id of the week clicked
    this.props.selectWeek(week)
  }

  handleMonthChange(month) {
    month = month.getMonth() + 1
    // if no user has been selected get first user
    const id = this.props.selectedUser ? this.props.selectedUser.id : 1
    this.props.fetchUser(id)
      .then(res => {
        console.log("id of selected user: ", this.props.selectedUser.id)
        console.log("selected user's name:", this.props.selectedUser.username)
      })

    // update selected month
    this.props.changeMonth(month)
    // refetch hours worked for current month
    this.props.fetchWeeks(month, id)
  }

  getHoursPerDay(date) {
    return this.props.weeksOfMonth.map(({week_number, days_in_week}) => {
      return days_in_week.map(({day_number, hours, id}) => {
        const result = { day_number, week_number, hours, id }
        // const tempCheck = {}
        // tempCheck[result.day_number] = [result.hours, result.id]
        // // add day in tempCheck only when on current month - avoid e.g. 0h0h displayed
        // if (!tempCheck.hasOwnProperty(result.day_number)) {
        //   tempCheck[result.day_number] = [result.hours, result.id]
        // } else {
        //   tempCheck[result.day_number][1] !== result.id ?
        //   tempCheck[result.day_number] = [result.hours, result.id] :
        //   ''
        //   // we store day ids too so that we can check if the day has been added
        // }
        // {result.hours + 'h'} {result.week_number}
        const dayNumber = result.day_number

        if (date === result.day_number) {
          return (
            <span
            className="hours-per-day"
            id={dayNumber}
            key={dayNumber}>
              {result.hours + 'h'}
            </span>
          )
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
          onMonthChange={(month) => this.handleMonthChange(month)}
          canChangeMonth={true}
          className="HoursWorked"
          renderDay={(day) => this.renderDay(day)}
          showWeekNumbers
          firstDayOfWeek={ 1 } // start week from Monday
        />
        <div>
          <p>
            Selected week:
            {this.state.selectedWeek
              ? this.state.selectedWeek - 1
              : '-'}
          </p>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ months, users }) {
  return {
    monthSelected: months.monthSelected,
    weeksOfMonth: months.weeksOfMonth,
    selectedWeekId: months.selectedWeekId,
    selectedUser: users.selectedUser
  }
}

export default connect(
  mapStateToProps,
  {
    changeMonth,
    selectWeek,
    fetchUser,
    fetchMonthWork,
    fetchWeeks
  })(HoursPerMonth)

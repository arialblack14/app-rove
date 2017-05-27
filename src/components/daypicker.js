import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/index'

import 'react-day-picker/lib/style.css'

const hoursPerMonth = {
  3: [{ name: 'Mirko', age: 35 }, { name: 'Gianluca', age: 29 }],
  8: [{ name: 'Elena', age: 21 }],
  9: [{ name: 'Irene', age: 43 }],
  12: [{ name: 'Paolo', age: 78 }, { name: 'Giorgia', age: 18 }],
  18: [{ name: 'Claudia', age: 54 }],
  22: [{ name: 'Maria', age: 9 }, { name: 'Luigi', age: 67 }],
  25: [{ name: 'Simone', age: 31 }],
  26: [{ name: 'Marta', age: 46 }],
}

class HoursPerMonth extends Component {

  componentWillMount() {
    const currentUser = this.props.fetchUser(2)
    console.log('User: ', currentUser)
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
      <DayPicker
        canChangeMonth={false}
        className="HoursWorked"
        renderDay={this.renderDay}
      />
    )
  }
}

function mapStateToProps({ users }) {
  return {
    user: users.user
  }
}

export default connect(mapStateToProps, { fetchUser })(HoursPerMonth)

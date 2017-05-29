import axios from 'axios'

export const FETCH_USERS = 'fetch_users'
export const FETCH_USER = 'fetch_user'
export const FETCH_MONTH = 'fetch_month'
export const FETCH_WEEKS = 'fetch_weeks'
export const FETCH_HOURS = 'fetch_hours'
export const APPROVE_WEEK = 'approve_week'

const USERS_URL = `https://timesheet-staging-aurity.herokuapp.com/api/users`
const MONTH_URL = `https://timesheet-staging-aurity.herokuapp.com/api/training/weeks`

export function fetchUsers() {
  const request = axios.get(`${USERS_URL}/`)

  return {
    type: FETCH_USERS,
    payload: request
  }
}

export function fetchUser(id) {
  const request = axios.get(`${USERS_URL}/${id}`)

  return {
    type: FETCH_USER,
    payload: request
  }
}

export function fetchMonthWork(month_number, user_id) {
  const request = axios.get(`${MONTH_URL}/${month_number}/2017/${user_id}`)
    .then(res => res.data.data.month)

  return {
    type: FETCH_MONTH,
    payload: request
  }
}

export function fetchWeeks(month_number, user_id) {
  const request = axios.get(`${MONTH_URL}/${month_number}/2017/${user_id}`)
    .then(res => res.data.data.weeks)

  return {
    type: FETCH_WEEKS,
    payload: request
  }
}

export function approveWeek(week_id, user_id, status) {
  const request = axios.put(`${MONTH_URL}/${week_id}/users/${user_id}`, status)
    .then(res => res.data.data.weeks)

  return {
    type: APPROVE_WEEK,
    payload: request
  }
}

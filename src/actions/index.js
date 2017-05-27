import axios from 'axios'

export const FETCH_USERS = 'fetch_users'
export const FETCH_USER = 'fetch_user'
export const FETCH_MONTH = 'fetch_month'

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

export function fetchMonth(month_number, user_id) {
  const request = axios.get(`${MONTH_URL}/${month_number}/2017/${user_id}`)

  return {
    type: FETCH_USER,
    payload: request
  }
}

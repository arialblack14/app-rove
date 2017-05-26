import axios from 'axios'

export const FETCH_USERS = 'FETCH_USERS'

const USERS_URL = `https://timesheet-staging-aurity.herokuapp.com/api/users`

export function fetchUsers() {
  const request = axios.get(`${USERS_URL}/`)

  return {
    type: FETCH_USERS,
    payload: request
  }
}

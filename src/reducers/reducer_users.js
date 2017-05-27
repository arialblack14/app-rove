import { FETCH_USERS, FETCH_USER } from '../actions/index'

const INITIAL_STATE = { all: [], selectedUser: null }

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USER:
      return {
        ...state,
        selectedUser: action.payload.data
      }
    case FETCH_USERS:
      return {
        ...state,
        all: action.payload.data
      }
    default:
      return state
  }
}

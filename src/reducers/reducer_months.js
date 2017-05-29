import { FETCH_MONTH, FETCH_WEEKS } from '../actions/index'

const INITIAL_STATE = { month: null, weeksOfMonth: [], hoursPerDay: null }

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_MONTH:
      return {
        ...state,
        monthSelected: action.payload
      }
    case FETCH_WEEKS:
      return {
        ...state,
        weeksOfMonth: action.payload
      }
    default:
      return state
  }
}

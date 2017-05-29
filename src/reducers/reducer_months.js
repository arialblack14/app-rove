import {
  FETCH_MONTH,
  FETCH_WEEKS,
  APPROVE_WEEK,
  CHANGE_MONTH,
  SELECT_WEEK
} from '../actions/index'

const INITIAL_STATE = { month: null, weeksOfMonth: [], status: null, week: null }

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
    case SELECT_WEEK:
      return {
        ...state,
        selectedWeekId: action.payload
      }
    case APPROVE_WEEK:
      return {
        ...state,
        status: action.payload
      }
    case CHANGE_MONTH:
      return {
        ...state,
        monthSelected: action.payload
      }
    default:
      return state
  }
}

import { FETCH_MONTH } from '../actions/index'

const INITIAL_STATE = { month: null }

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_MONTH:
      return {
        ...state,
        monthSelected: action.payload.data
      }
    default:
      return state
  }
}

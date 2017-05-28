import { combineReducers } from 'redux'
import UsersReducer from './reducer_users'
import MonthReducer from './reducer_months'

const rootReducer = combineReducers({
  users: UsersReducer,
  months: MonthReducer
})

export default rootReducer

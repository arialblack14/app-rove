import { combineReducers } from 'redux'
import UsersReducer from './reducer_users'
import MonthsReducer from './reducer_months'

const rootReducer = combineReducers({
  users: UsersReducer,
  months: MonthsReducer
})

export default rootReducer

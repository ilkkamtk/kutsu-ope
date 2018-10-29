import { combineReducers } from 'redux'
import kutsuApiReducer from './kutsuApi-reducer'
import userEventsReducer from './userEvents-reducer'

export default combineReducers({
  // partOfTheStore: reducerThatIsResponsible
  kutsuApiState: kutsuApiReducer,
  userEventsState: userEventsReducer
})
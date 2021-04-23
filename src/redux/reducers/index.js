import { combineReducers } from 'redux'
import userReducer from './getData'

export default combineReducers({
  dataList: userReducer
})
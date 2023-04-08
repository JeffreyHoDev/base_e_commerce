import { combineReducers } from 'redux'
import userReducer from './reducers/userReducer'
import cartReducer from './reducers/cartReducer'

const rootReducer = combineReducers({
    userReducer,
    cartReducer
})

export default rootReducer

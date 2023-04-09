import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import rootReducer from './rootReducer'

let middleware = []
if(process.env.NODE_ENV === 'development'){
  middleware.push(logger)
}

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware
})

export default store
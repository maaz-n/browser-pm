import { configureStore } from '@reduxjs/toolkit'
import passwordsReducer from './slice'

export const store = configureStore({
  reducer: {
    PassOP: passwordsReducer
  },
})
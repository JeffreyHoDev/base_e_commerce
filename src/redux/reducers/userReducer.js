import { createSlice } from '@reduxjs/toolkit'
import { signOutUser } from '../../utils/firebase.util'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null
  },
  reducers: {
    setUser(state, action) {
        state.userInfo = action.payload
    },
    logoutUser(state) {
        signOutUser()
        state.userInfo = null
    }
  }
})

export const { setUser, logoutUser } = userSlice.actions
export default userSlice.reducer
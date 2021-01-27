import { createSlice, configureStore } from '@reduxjs/toolkit'

export const login = createSlice({
  name: 'login',
  initialState: {
    loggedIn: false
  },
  reducers: {
    loginUser: (state, action) => {
      state.loggedIn = action.payload
    },
    logoffUser: state => {
      state.loggedIn = false;
    },
  }
})

export const { loginUser, logoffUser } = login.actions

const store = configureStore({
  reducer: login.reducer
})

export default store

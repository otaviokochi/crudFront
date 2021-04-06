import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createSlice({
  name: 'login',
  initialState: {
    loggedIn: JSON.parse(localStorage.getItem('credentials')) ? JSON.parse(localStorage.getItem('credentials')).login : null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.loggedIn = action.payload.login;
      axios.defaults.headers.common['Authorization'] = `bearer ${action.payload.token}`;
    },
    logoffUser: state => {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.clear();
      state.loggedIn = false;
    },
  }
})

export const { loginUser, logoffUser } = login.actions

const store = configureStore({
  reducer: login.reducer
})

export default store

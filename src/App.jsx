import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd'
import Login from './views/login/Login'
import store, { loginUser, logoffUser } from './redux/auth';
import Content from './components/layout/Content';
import MenuHeader from './components/layout/MenuHeader';
import SideBar from './components/layout/SideBar';
import axios from 'axios'


const App = () => {
  const { Header } = Layout
  const  [ loggedIn, setLoggedIn ] = useState(store.getState().loggedIn);
  
  useEffect(() => {
    async function validateToken (user) {
      const url = `http://localhost:5000/validateToken`;
      return await axios({
        method: 'POST',
        url: url,
        data: { ...user }
      })
    }
    const user = JSON.parse(localStorage.getItem('credentials'));
    if (user) {
      validateToken(user)
        .then(_ => {
          store.dispatch(loginUser(user));
        })
        .catch(error => {
          console.log(error);
          store.dispatch(logoffUser());
          setLoggedIn(false);
        });
    }
  }, [])

  return (
    <Router>
      <Switch>
        <Route path='/login'>
          {!loggedIn ? <Redirect to="/login" /> : <Redirect to="/" />}
          <Login></Login>
        </Route>
        <Route path='/'>
          {loggedIn ? <Redirect to="/" /> : <Redirect to='/login' />}
          <Layout>
            <Header>
              <MenuHeader />
            </Header>
            <Layout>
              <SideBar />
              <Layout>
                <Content />
              </Layout>
            </Layout>
          </Layout>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
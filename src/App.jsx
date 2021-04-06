import React, { useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd'
import Login from './views/login/Login'
import store, { loginUser } from './redux/auth';

import Content from './components/layout/Content';
import MenuHeader from './components/layout/MenuHeader'
import SideBar from './components/layout/SideBar'


const App = () => {
  const { Header } = Layout 
  const { loggedIn } = store.getState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('credentials'));
    if(user) store.dispatch(loginUser(user));
  }, [])

  return (
    <Router>
      <Switch>
        <Route path='/login'>
          {!loggedIn ? <Redirect to="/login" /> : <Redirect to="/" />}
          <Login></Login>
        </Route>
        <Route path='/'>
          {loggedIn ? <Redirect to="/"/> : <Redirect to='/login'/>}
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
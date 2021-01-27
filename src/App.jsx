import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd'
import Login from './views/login/login'
import store from './redux/auth'

import Content from './components/layout/Content';
import MenuHeader from './components/layout/MenuHeader'
import SideBar from './components/layout/SideBar'

import './App.css'

const App = () => {
  const { Header } = Layout 
  const { loggedIn } = store.getState();

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
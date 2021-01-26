import { Layout } from 'antd'
import React from 'react'
import { Route, Switch } from "react-router-dom";

import UpdateUser from '../views/user/UpdateUser'
import DeleteUser from '../views/user/DeleteUser'
import SearchUser from '../views/user/SearchUser' 
import CreateUser from '../views/user/CreateUser'

import UpdateClient from '../views/client/UpdateClient'
import DeleteClient from '../views/client/DeleteClient'
import SearchClient from '../views/client/SearchClient' 
import CreateClient from '../views/client/CreateClient'


import './Content.css'

const Content = () => {
  const { Content } = Layout 

  return (
  <Layout>
    <Content
    className="site-layout-background"
    style={{
      padding: 24,
      margin: 0,
    }}>
      <Switch>
        <Route path="/updateUser">
          <UpdateUser />
        </Route>
        <Route path="/deleteUser">
          <DeleteUser />
        </Route>
        <Route path="/searchUser">
          <SearchUser />
        </Route>
        <Route path="/createUser">
          <CreateUser />
        </Route>
        <Route path="/updateClient">
          <UpdateClient />
        </Route>
        <Route path="/deleteClient">
          <DeleteClient />
        </Route>
        <Route path="/searchClient">
          <SearchClient />
        </Route>
        <Route path="/createClient">
          <CreateClient />
        </Route>
      </Switch>
    </Content>
  </Layout>
  )
}

export default Content;
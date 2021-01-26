import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd'

import Content from './components/Content';
import MenuHeader from './components/MenuHeader'
import SideBar from './components/SideBar'

const App = () => {
  const { Header } = Layout 

  return (
    <Router>
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
    </Router>
  )
}

export default App;
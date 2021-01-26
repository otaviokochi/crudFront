import React from 'react'
import { Menu, Layout } from 'antd'
import { Link } from "react-router-dom";


const SideBar = () => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;

  return (
    <Sider width={200} style={{ background: 'white' }}>
      <Menu  
        mode="inline"
        // defaultSelectedKeys={['createUser']}
        // defaultOpenKeys={['user']}
        >
        <SubMenu key="user" title="Usuário">
          <Menu.Item key="createUser" >
            <Link to ="/createUser">Criar Usuário</Link>
          </Menu.Item>
          <Menu.Item key="updateUser" >
            <Link to ="/updateUser">Atualizar Usuário</Link>
          </Menu.Item>
          <Menu.Item key="searchUser" >
            <Link to ="/searchUser">Procurar Usuário</Link>
          </Menu.Item>
          <Menu.Item key="deleteUser" >
            <Link to ="/deleteUser">Deletar Usuário</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="client" title="Cliente">
          <Menu.Item key="createClient" >
            <Link to ="/createClient">Criar Cliente</Link>
          </Menu.Item>
          <Menu.Item key="updateClient" >
            <Link to ="/updateClient">Atualizar Cliente</Link>
          </Menu.Item>
          <Menu.Item key="searchClient" >
            <Link to ="/searchClient">Procurar Cliente</Link>
          </Menu.Item>
          <Menu.Item key="deleteClient" >
            <Link to ="/deleteClient">Deletar Cliente</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default SideBar;
import React from 'react'

import { Menu, Row, Col, Button, Dropdown, Tooltip } from 'antd'
import { LogoutOutlined, UserOutlined} from '@ant-design/icons';


const MenuHeader = () => {
  const logOut = () => {
    console.log('logout');
  }
  
  const menu = (
    <Menu onClick={logOut} mode="horizontal">
      <Menu.Item style={{ borderRadius: '24px', textAlign: 'center' }} key="logout">
        <LogoutOutlined /> Sair
      </Menu.Item>
    </Menu>
  )

  return (
    <Row justify='space-between'>
      <Col>
        <h1 style={{ color: 'white' }}>Crud</h1>
      </Col>
      <Col>
        <Dropdown overlay={menu} trigger={['click']}>
          <Tooltip placement='left' color='#0091ea'>
            <Button
              icon={<UserOutlined />}
              shape='round'
              size='large'
              onClick={e => e.preventDefault()}>
                Sair
            </Button>
          </Tooltip>
        </Dropdown>
      </Col>
    </Row>        
  )
}

export default MenuHeader;
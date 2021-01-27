import React from 'react'
import store, {logoffUser} from '../../redux/auth'
import { Menu, Row, Col, Button, Dropdown, Tooltip } from 'antd'
import { LogoutOutlined, UserOutlined} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';


const MenuHeader = () => {
  const history = useHistory();

  const logOut = () => {
    store.dispatch(logoffUser());
    history.push('/login');
  }

  const { loggedIn } = store.getState();

  
  const menu = (
    <Menu onClick={logOut}>
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
                {loggedIn}
            </Button>
          </Tooltip>
        </Dropdown>
      </Col>
    </Row>        
  )
}

export default MenuHeader;
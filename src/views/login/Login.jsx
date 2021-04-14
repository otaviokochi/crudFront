import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, Input, Typography } from 'antd'
import loginRequest from '../../services/login'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import store, { loginUser } from '../../redux/auth';
import './Login.css';

const Login = () => {
  const history = useHistory();
  const [succesLogin, setSuccesLogin] = useState(true);

  const onFinish = (values) => {
    loginRequest(values.login, values.password)
      .then(response => {
        store.dispatch(loginUser(response.data));
        localStorage.setItem('credentials', JSON.stringify(response.data));
        history.push("/");
      })
      .catch(() => setSuccesLogin(false));
  } 

  return (
    <Row className='loginRow' align='middle'>
      <Card headStyle={{borderColor: "rgba(120, 120, 120)"}}
            style={{
              borderColor: "rgba(120, 120, 120)",
              width: 310,
            }}
            title={
              <Typography.Title
                level={3}
                style={{
                  width: '100%',
                  textAlign: 'center',
                  color: '#000'
                }}>
                Autenticação Crud
              </Typography.Title>
            }
            size="large" 
            >
        <Row>
          { !succesLogin &&
            <Col span={24}>
              <h2>Login/Senha incorretos!</h2>
            </Col>
          }
          <Col span={24}>
            <Form layout="vertical" name="authentication" onFinish={onFinish}>
              <Form.Item name="login" label="Username" rules={[{ required: true, message: "Informe o username" }]}>
                <Input style={{outline: "none"}}></Input>
              </Form.Item>
              <Form.Item name="password" label="Senha" rules={[{ required: true, message: "Informe a senha"  }]}>
                <Input.Password style={{outline: "none"}}
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
              </Form.Item>
              <Form.Item>
                <Button style={{width: '100%'}} size="large" type="primary" htmlType="submit">
                  Entrar
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
    </Row>
  );
}

export default Login;

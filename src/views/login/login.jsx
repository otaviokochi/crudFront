import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, Input, Typography } from 'antd'
import loginRequest from '../../services/login'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import store, { loginUser } from '../../redux/auth';

const Login = () => {
  const history = useHistory();
  const [succesLogin, setSuccesLogin] = useState(true);

  const onFinish = (values) => {
    loginRequest(values.username, values.password)
      .then(response => {
        if(response) {
          store.dispatch(loginUser(JSON.parse(response.config.data).username));
          history.push("/");
        } else {
          setSuccesLogin(false);
        }
      })
      .catch(err => console.log(err));
  } 

  
  const validateMessages = {
    required: '${label} é obrigatório!'
  }
  
  return (
    <Row style={{position: 'absolute', left: '40%', top: '30%'}} align='middle'>
      <Card   headStyle={{
                borderColor: '#03a9f4'
              }}
              style={{
                borderColor: '#03a9f4',
                width: 310,
              }}
              title={
                <Typography.Title
                  level={3}
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    color: '#03a9f4'
                  }}>
                  Autenticação Crud
                </Typography.Title>
              }
            size="large" 
            style={{width: 300,margin: '10px', textAlign: 'center'}}>
        <Row>
          { !succesLogin &&
            <Col span={24}>
              <h2>Login/Senha incorretos!</h2>
            </Col>
          }
          <Col span={24}>
            <Form layout="vertical" name="authentication" onFinish={onFinish}  validateMessages={validateMessages}>
              <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                <Input ></Input>
              </Form.Item>
              <Form.Item name="password" label="Senha" rules={[{ required: true }]}>
                <Input.Password
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

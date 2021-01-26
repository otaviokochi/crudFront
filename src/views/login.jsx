import React from 'react';
import { Row, Col, Card, Form, Button, Input, Typography, message, Space } from 'antd'

const Login = () => {
  return (
    <Row style={{ height: '100vh' }}>
      <Col>
        <Row justify='center'>
          <Col>
            <Card
              headStyle={{
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
                  SAUV
                </Typography.Title>
              }>
              <Row justify='center' align='middle'>
                <Col span={24}>
                  <Form
                    layout='vertical'
                    name="autenticacao"
                    initialValues={{ remember: true }}
                    onFinish={true}
                  >
                    <Form.Item
                      label="Usuário"
                      name="usuario"
                      rules={[{ required: true, message: 'Nome de usuário obrigatório!', }]}
                    >
                      <Input size='large' />
                    </Form.Item>

                    <Form.Item
                      label="Senha"
                      name="senha"
                      rules={[{ required: true, message: 'Senha obrigatória!' },
                      ]}
                    >
                      <Input.Password size='large' />
                    </Form.Item>

                    <Form.Item >
                      <Button style={{ width: '100%' }} size='large' type="primary" htmlType="submit">
                        Entrar
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row >
  );
}

export default Login;

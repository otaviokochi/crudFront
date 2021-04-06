import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import create from '../services/create';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


const CreateForm = props => {
  const [form] = Form.useForm();
  const isUser = props.name.includes('Usuário');
  const [createdSuccessfully, setCreatedSuccessfully] = useState(false);
  const [firstRender, setFisrtRender] = useState(true);
  
  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values) => {
    create(values).then(() => {
      setCreatedSuccessfully(true);
      setFisrtRender(false);
      form.resetFields();
    })
    .catch(err => {
      console.log(err);
      setCreatedSuccessfully(false);
    })
  }

  return (
    <div>
      <h2>{props.name}</h2>
    <Form {... layout} form={form} name="create" onFinish={onFinish}>
      <Form.Item name="name" label="Nome" rules={[{ required: true, message: 'Nome é obrigatório' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Email é obrigatório' }]}>
        <Input type="email"/>
      </Form.Item>
      <Form.Item name="age" label="Idade" rules={[{ required: true, message: 'Idade é obrigatório' }]}>
        <Input type="number"/>
      </Form.Item>
      <Form.Item name="address" label="Endereço" rules={[{ required: true, message: 'Endereço é obrigatório' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="cpf" label="Cpf" rules={[{ required: true, message: 'Cpf é obrigatório' }]}>
        <Input size="11" maxLength="11"/>
      </Form.Item>
      { isUser &&
        <div>
          <Form.Item name="login" label="Login" rules={[{ required: true, message: 'Login é obrigatório' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Senha" rules={[{ required: true, message: 'Senha é obrigatório' }]}>
            <Input.Password
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>
        </div>
      }
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
        <Button type="primary" htmlType="submit">
          Criar
        </Button>
      </Form.Item>
    </Form>
    {createdSuccessfully &&
      <h2 style={{margin: '10px 0px'}}>{isUser ? 'Usuário' : 'Cliente'} criado com sucesso!</h2>
    }
    {!firstRender && !createdSuccessfully &&
      <h2 style={{margin: '10px 0px'}}>Erro ao criar o {isUser ? 'usuário' : 'cliente'}!</h2>
    }
    </div>
  )
}

export default CreateForm;
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import create from '../services/create';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


const CreateForm = props => {
  const [form] = Form.useForm();
  const isUser = props.name.includes('Usuário');
  const [createdSuccessfully, setCreatedSuccessfully] = useState(false);
  const [firstRender, setFisrtRender] = useState(true);
  
  const validateMessages = {
    required: '${label} é obrigatório!'
  }

  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values) => {
    create(values).then(response => {
      if(response){
        setCreatedSuccessfully(true);
      } else {
        setCreatedSuccessfully(false);
      }
      setFisrtRender(false);
      form.resetFields();
    })
  }

  return (
    <div>
      <h2>{props.name}</h2>
    <Form {... layout} form={form} name="create" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name="name" label="Nome" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input type="email"/>
      </Form.Item>
      <Form.Item name="age" label="Idade" rules={[{ required: true }]}>
        <Input type="number"/>
      </Form.Item>
      <Form.Item name="address" label="Endereço" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="cpf" label="Cpf" rules={[{ required: true }]}>
        <Input size="11" maxLength="11"/>
      </Form.Item>
      { isUser &&
        <div>
          <Form.Item name="login" label="Login" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Senha" rules={[{ required: true }]}>
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
import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';

const CreateForm = () => {

  const validateMessages = {
    required: '${label} é obrigatório!'
  }
  

  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values) => {
    //make request
    console.log(values)
  }

  return (
    <Form {... layout} name="create" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name="name" label="Nome" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="age" label="Idade" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="address" label="Endereço" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="cpf" label="Cpf" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
        <Button type="primary" htmlType="submit">
          Criar
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CreateForm;